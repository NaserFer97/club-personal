import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalesAdheridosService } from 'src/app/services/locales/locales-adheridos/locales-adheridos.service';

@Component({
  selector: 'app-locales-crear',
  templateUrl: './locales-crear.component.html',
  styleUrls: ['./locales-crear.component.scss']
})
export class LocalesCrearComponent implements OnInit {

  form: FormGroup;
  formInvalid = false;
  getErrorMessage: any = getErrorMessage;

  get nombreControl() { return this.form.get('nombre'); }
  get rubroControl() { return this.form.get('rubro'); }
  get fechaControl() { return this.form.get('fecha'); }

  localId: number | null = null;

  constructor(private fb: FormBuilder, private router: Router, private spinner: NgxSpinnerService, private localesAdheridosService: LocalesAdheridosService, private route: ActivatedRoute) {
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
    //Llamar al servicio crear
    this.localesAdheridosService.crear(formValues).subscribe(
      data => {
        this.spinner.hide();
        if (data) {
          this.router.navigateByUrl('locales-adheridos')
        }
      },
      err => {
        this.spinner.hide();
        var data = err.error;
        //mostrar mensaje al usuario
      }
    );
  }


  volver() {
    this.router.navigateByUrl('locales-adheridos');
  }
}
