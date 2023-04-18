import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { PromocionesService } from 'src/app/services/productos/promociones/promociones.service';
@Component({
  selector: 'app-promociones-crear',
  templateUrl: './promociones-crear.component.html',
  styleUrls: ['./promociones-crear.component.scss']
})
export class PromocionesCrearComponent implements OnInit {


  form: FormGroup;
  formInvalid = false;
  getErrorMessage: any = getErrorMessage;

  get tipoEvento() { return this.form.get('tipoEvento'); }
  get fechaDesde() { return this.form.get('fechaDesde'); }
  get fechaHasta() { return this.form.get('fechaDesde'); }
  get palabra() { return this.form.get('palabra'); }


  localId: number | null = null;

  constructor(private fb: FormBuilder, private router: Router, private spinner: NgxSpinnerService, private PromocionesService: PromocionesService, private route: ActivatedRoute) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      tipoEvento: ['', Validators.required],
      fechaDesde: ['', Validators.required],
      fechaHasta: ['', Validators.required],
      palabra: ['', Validators.required],
      
    });

    const local = history.state.local;
    if (local) {
      this.localId = local.id;
      this.form.patchValue({
        tipoEvento: local.tipoEvento,
        fechaDesde: local.fechaDesde,
        fechaHasta: local.fechaHasta,
        palabra: local.palabra,
     
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
      this.PromocionesService.crear(formValues).subscribe(
        data => {
          this.spinner.hide();
          if (data) {
            this.router.navigateByUrl('/productos/promociones');
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
    this.router.navigateByUrl('/productos/promociones');
  }
}

