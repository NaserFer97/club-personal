import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from 'src/app/services/eventos/eventos/eventos.service';

@Component({
  selector: 'app-eventos-crear',
  templateUrl: './eventos-crear.component.html',
  styleUrls: ['./eventos-crear.component.scss']
})
export class EventosCrearComponent implements OnInit {


  form: FormGroup;
  formInvalid = false;
  getErrorMessage: any = getErrorMessage;

  get nombreControl() { return this.form.get('nombre'); }
  get tipoEvento() { return this.form.get('tipoEvento'); }
  get tipoBeneficio() { return this.form.get('tipoBeneficio'); }
  get lugar() { return this.form.get('lugar'); }
  get puntoVenta() { return this.form.get('puntoVenta'); }
  get descripcion() { return this.form.get('descripcion'); }
  get fechaDesde() { return this.form.get('fechaDesde'); }
  get fechaHasta() { return this.form.get('fechaDesde'); }

  


  localId: number | null = null;

  constructor(private fb: FormBuilder, private router: Router, private spinner: NgxSpinnerService, private EventosService: EventosService, private route: ActivatedRoute) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      tipoEvento: ['', Validators.required],
      tipoBeneficio: ['', Validators.required],
      lugar: ['', Validators.required],
      puntoVenta: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaDesde: ['', Validators.required],
      fechaHasta: ['', Validators.required],
      
     
    });

    const local = history.state.local;
    if (local) {
      this.localId = local.id;
      this.form.patchValue({
        nombre: local.nombre,
        tipoevento: local.tipoevento,
        tipoBeneficio: local.tipoBeneficio,
        lugar: local.lugar,
        puntoVenta: local.puntoVenta,
        descripcion: local.descripcion,
        fechaDesde: local.fechaDesde,
        fechaHasta: local.fechaHasta,
      

       
       
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
      this.EventosService.crear(formValues).subscribe(
        data => {
          this.spinner.hide();
          if (data) {
            this.router.navigateByUrl('eventos/eventos');
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
    this.router.navigateByUrl('eventos/eventos');
  }
}

