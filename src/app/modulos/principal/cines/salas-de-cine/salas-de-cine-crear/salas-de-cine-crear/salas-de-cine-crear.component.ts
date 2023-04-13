import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { SalasDeCineService } from 'src/app/services/cines/Salas-de-cine/salas-de-cine.service';

@Component({
  selector: 'app-salas-de-cine-crear',
  templateUrl: './salas-de-cine-crear.component.html',
  styleUrls: ['./salas-de-cine-crear.component.scss'],
})
export class SalasDeCineCrearComponent implements OnInit {
  form: FormGroup;
  formInvalid = false;
  getErrorMessage: any = getErrorMessage;

  get nombreControl() {
    return this.form.get('nombre');
  }
  get rubroControl() {
    return this.form.get('rubro');
  }
  get fechaControl() {
    return this.form.get('fecha');
  }

  localId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private SalasDeCineService: SalasDeCineService,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      sitioWeb: [''],
      fecha: [null, Validators.required],
      destacado: [false],
      email: ['', [Validators.required, Validators.email]],
    });

    const local = history.state.local;
    if (local) {
      this.localId = local.id;
      this.form.patchValue({
        nombre: local.nombre,
        sitioWeb: local.web,
        fecha: local.fecha,
        destacado: local.destacado, 
        email: local.email,

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
      this.SalasDeCineService.crear(formValues).subscribe(
        (data) => {
          this.spinner.hide();
          if (data) {
            this.router.navigateByUrl('salas-de-cine');
          }
        },
        (err) => {
          this.spinner.hide();
          var data = err.error;
          //mostrar mensaje al usuario
        }
      );
    }, 500);
  }

  volver() {
    this.router.navigateByUrl('salas-de-cine');
  }
}
