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


  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group
      ({

      })

  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nombre: ['', Validators.required],
      rubro: [''],
      sitioWeb: [''],
      fecha: [new Date()],
      destacado: [false],
      mostrarEnApp: [false],
      emailFormControl: this.emailFormControl,
      tipoLocal: [''],

    });
  }
  guardar() {

    const formValues = this.myForm.getRawValue();
    const jsonStr = JSON.stringify(formValues);
    console.log(jsonStr);
    alert("El formulario se ha guardado correctamente.");
  }
  cancelar() {
    this.myForm.reset();
  }
  formControlCompleted(controlName: string): boolean | null {
    const control = this.myForm.get(controlName);
    return control && control.valid && (control.value !== null && control.value !== '');
  }
  

  
}
