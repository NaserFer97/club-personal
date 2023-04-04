import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { LocalService } from 'src/app/services/locales-crear/local.service'; 

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

  constructor(private fb: FormBuilder, private router: Router , private spinner: NgxSpinnerService, private localService: LocalService) {
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
  }

  guardar() {
    if (this.form.valid) {
      const formValues = this.form.getRawValue();
      this.spinner.show();
  
      setTimeout(() => {
        this.localService.createLocal(formValues).subscribe(
          (response) => {
            this.spinner.hide();
            this.router.navigateByUrl('locales-adheridos');
          },
          (error) => {
            this.spinner.hide();
          }
        );
      }, 500); 
    } else {
      this.formInvalid = true;
      this.form.markAllAsTouched();
    }
  }
  

  volver() {
    this.router.navigateByUrl('locales-adheridos');
  }
 
}
