import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { AgenciasEntregaService } from 'src/app/services/premios-tangibles/agencias-entrega/agencias-entrega.service';
@Component({
  selector: 'app-agencias-crear',
  templateUrl: './agencias-crear.component.html',
  styleUrls: ['./agencias-crear.component.scss']
})
export class AgenciasCrearComponent implements OnInit {


  form: FormGroup;
  formInvalid = false;
  getErrorMessage: any = getErrorMessage;

  get nombreControl() { return this.form.get('nombre'); }
  get zonaControl() { return this.form.get('zona'); }
  get telefonoControl() { return this.form.get('telefono'); }
  get ciudadControl() { return this.form.get('ciudad'); }
  get direccionControl() { return this.form.get('direccion'); }

  localId: number | null = null;

  constructor(private fb: FormBuilder, private router: Router, private spinner: NgxSpinnerService, private AgenciasEntregaService: AgenciasEntregaService, private route: ActivatedRoute) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      zona: ['', Validators.required],
      telefono: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
    });

    const local = history.state.local;
    if (local) {
      this.localId = local.id;
      this.form.patchValue({
        nombre: local.nombre,
        zona: local.zona,
        telefono: local.telefono,
        ciudad: local.ciudad,
        direccion: local.direccion,
      
      });
    }
  }

  guardar() {
    if (!this.form.valid) {
      this.formInvalid = true;
      this.form.markAllAsTouched();
      return;
    }
  
    const formValues = this.form.getRawValue();
    this.spinner.show();
  
    // Llamar al servicio crear con un retraso artificial de 2 segundos
    setTimeout(() => {
      this.AgenciasEntregaService.crear(formValues).subscribe(
        data => {
          this.spinner.hide();
          if (data) {
            this.router.navigateByUrl('/premios-tangibles/agencias-entrega');
          }
        },
        err => {
          this.spinner.hide();
          var data = err.error;
          //mostrar mensaje al usuario
        }
      );
    }, 500);
  }
  


  volver() {
    this.router.navigateByUrl('premios-tangibles/agencias-entrega');
  }
}
