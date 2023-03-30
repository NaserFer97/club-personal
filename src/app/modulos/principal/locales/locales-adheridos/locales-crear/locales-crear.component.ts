import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-locales-crear',
  templateUrl: './locales-crear.component.html',
  styleUrls: ['./locales-crear.component.scss']
})
export class LocalesCrearComponent implements OnInit {

  myForm: FormGroup;
  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  formInvalid = false;

  get nombreControl() { return this.myForm.get('nombre'); }
  get rubroControl() { return this.myForm.get('rubro'); }
  get fechaControl() { return this.myForm.get('fecha'); }

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nombre: ['', Validators.required],
      rubro: ['', Validators.required],
      sitioWeb: [''],
      fecha: [new Date(), Validators.required],
      destacado: [false],
      mostrarEnApp: [false],
      emailFormControl: this.emailFormControl,
      tipoLocal: ['', Validators.required],
    });
  }

  guardar() {
    if (this.myForm.valid) {
      const formValues = this.myForm.getRawValue();
      const jsonStr = JSON.stringify(formValues);
      console.log(jsonStr);
    } else {
      this.formInvalid = true;
      this.myForm.markAllAsTouched(); 
    }
  }

  cancelar() {
    this.myForm.reset();
  }

  formControlCompleted(controlName: string): boolean | null {
    const control = this.myForm.get(controlName);
    return control && control.valid && (control.value !== null && control.value !== '');
  }
}
