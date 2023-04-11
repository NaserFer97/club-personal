import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { LocalService } from 'src/app/services/locales-crear/local.service'; 
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';



@Component({
  selector: 'app-listas-crear',
  templateUrl: './listas-crear.component.html',
  styleUrls: ['./listas-crear.component.scss']
})
export class ListasCrearComponent implements OnInit {

  form: FormGroup;
  formInvalid = false;
  getErrorMessage: any = getErrorMessage;
 


  get nombreControl() { return this.form.get('nombre'); }
  get rubroControl() { return this.form.get('rubro'); }
  get fechaControl() { return this.form.get('fecha'); }

  localId: number | null = null;

  constructor(private fb: FormBuilder, private router: Router, private spinner: NgxSpinnerService, private localService: LocalService, private route: ActivatedRoute) {
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

  // Crear una referencia para el observable de la solicitud
  let request$: Observable<any>;

  if (this.localId) {
    // Si hay un localId, actualiza el local existente
    request$ = this.localService.actualizarLocal(this.localId.toString(), formValues);
  } else {
    // Si no hay localId, crea un nuevo local
    request$ = this.localService.crearLocal(formValues);
  }

  // Añadir un retraso artificial de 500 ms para simular una carga
  setTimeout(() => {
    request$.subscribe(
      (response) => {
        this.spinner.hide();
        if (this.localId) {
          // Si hay un localId, actualiza el local en la vista
          const updatedLocal = { ...formValues, id: this.localId };
          this.localService.updateLocalInView(updatedLocal);
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
    this.router.navigateByUrl('locales-listas');
  }
 
  goToListasBeneficios() {
    this.router.navigate(['/listas-beneficios']);
  }
  goToListasCrear() {
    this.router.navigate(['/listas/crear']);
  }
  isListasCrearActive(): boolean {
    return this.router.isActive('/listas/crear', false);
  }

  isListasBeneficiosActive(): boolean {
    return this.router.isActive('/listas-beneficios', false);
  }
}