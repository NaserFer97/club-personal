import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locales-crear',
  templateUrl: './locales-crear.component.html',
  styleUrls: ['./locales-crear.component.scss']
})
export class LocalesCrearComponent implements OnInit {

  // Declaración de variables y objetos
  myForm: FormGroup; // Formulario
  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]); // Validador de correo electrónico
  formInvalid = false; // Bandera para verificar si el formulario es inválido

  // Funciones para obtener los controles del formulario
  get nombreControl() { return this.myForm.get('nombre'); }
  get rubroControl() { return this.myForm.get('rubro'); }
  get fechaControl() { return this.myForm.get('fecha'); }

  // Constructor del componente
  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({}); // Inicialización del formulario vacío
  }

  // Función que se ejecuta al iniciar el componente
  ngOnInit(): void {
    // Definición de los controles y validaciones del formulario
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

  // Función para guardar el formulario
  guardar() {
    if (this.myForm.valid) { // Si el formulario es válido
      const formValues = this.myForm.getRawValue(); // Obtener los valores del formulario
      const jsonStr = JSON.stringify(formValues); // Convertir los valores del formulario a formato JSON
      console.log(jsonStr); // Imprimir en consola el JSON con los valores del formulario

    } else { // Si el formulario es inválido
      this.formInvalid = true; // Establecer la bandera formInvalid como verdadera
      this.myForm.markAllAsTouched(); // Marcar todos los controles del formulario como tocados (para mostrar los mensajes de error)
    }
  }

  // Función para cancelar el formulario y resetear los controles
  cancelar() {
    this.myForm.reset(); // Resetear el formulario
  }

  // Función para verificar si un control del formulario está completo y válido
  formControlCompleted(controlName: string): boolean | null {
    const control = this.myForm.get(controlName); // Obtener el control del formulario
    return control && control.valid && (control.value !== null && control.value !== ''); // Verificar si el control existe, es válido y tiene un valor
  }

  // Función para volver atrás
  volver() {
    if (this.myForm.valid) // Si el formulario es válido
      this.router.navigateByUrl('locales-adheridos'); // Navegar a la ruta "locales-adheridos"
  }
}
