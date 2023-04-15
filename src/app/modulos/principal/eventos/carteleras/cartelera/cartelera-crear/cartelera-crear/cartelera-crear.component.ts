import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { CarteleraService } from 'src/app/services/eventos/carteleras/cartelera.service';

@Component({
  selector: 'app-cartelera-crear',
  templateUrl: './cartelera-crear.component.html',
  styleUrls: ['./cartelera-crear.component.scss']
})
export class CarteleraCrearComponent implements OnInit {

  form: FormGroup;
  formInvalid = false;
  getErrorMessage: any = getErrorMessage;

  get tipoEvento() { return this.form.get('tipoEvento'); }
  get fechaDesde() { return this.form.get('fechaDesde'); }
  get fechaHasta() { return this.form.get('fechaDesde'); }


  localId: number | null = null;

  constructor(private fb: FormBuilder, private router: Router, private spinner: NgxSpinnerService, private CarteleraService: CarteleraService, private route: ActivatedRoute) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      tipoEvento: ['', Validators.required],
      fechaDesde: ['', Validators.required],
      fechaHasta: ['', Validators.required],
      
    });

    const local = history.state.local;
    if (local) {
      this.localId = local.id;
      this.form.patchValue({
        tipoEvento: local.tipoEvento,
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
      this.CarteleraService.crear(formValues).subscribe(
        data => {
          this.spinner.hide();
          if (data) {
            this.router.navigateByUrl('eventos/cartelera');
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
    this.router.navigateByUrl('eventos/cartelera');
  }
}

