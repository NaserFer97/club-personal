import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RubrosCrearService } from 'src/app/services/locales/rubros/rubros-crear/rubros-crear.service';
@Component({
  selector: 'app-rubros-crear',
  templateUrl: './rubros-crear.component.html',
  styleUrls: ['./rubros-crear.component.scss']
})
export class RubrosCrearComponent implements OnInit {

  form: FormGroup;
  formInvalid = false;
  getErrorMessage: any = getErrorMessage;

  get nombreControl() { return this.form.get('nombre'); }
  get rubroControl() { return this.form.get('rubro'); }
  get fechaControl() { return this.form.get('fecha'); }

  localId: number | null = null;

  constructor(private fb: FormBuilder, private router: Router, private spinner: NgxSpinnerService, private RubrosCrearService: RubrosCrearService, private route: ActivatedRoute) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      rubro: ['', Validators.required],
      sitioWeb: [''],
      fecha: [new Date(), Validators.required],
      destacado: [false],
      mostrarEnApp: [false],
      email: ['', [Validators.required, Validators.email]],
      tipoLocal: ['', Validators.required],
    });

    const local = history.state.local;
    if (local) {
      this.localId = local.id;
      this.form.patchValue({
        nombre: local.nombre,
        rubro: local.rubro,
        sitioWeb: local.web,
        fecha: local.fecha,
        destacado: local.destacado,
        mostrarEnApp: local.mostrarEnApp,
        email: local.email,
        tipoLocal: local.tipo,
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

    let request$: Observable<any>;

  

    // Añadir un retraso artificial de 500 ms para simular una carga
    setTimeout(() => {
      request$.subscribe(
        (response) => {
          this.spinner.hide();
          if (this.localId) {
            // Si hay un localId, actualiza el local en la vista
            const updatedLocal = { ...formValues, id: this.localId };
          }
          // Navegar de regreso a la lista de locales adheridos
          this.router.navigateByUrl('locales-adheridos');
        },
        () => {
          this.spinner.hide();
        }
      );
    }, 500);
  }




  volver() {
    this.router.navigateByUrl('locales-rubros');
  }
}