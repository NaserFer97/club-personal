import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ListasService } from 'src/app/services/locales/listas/listas.service';


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

  constructor(private fb: FormBuilder, private router: Router, private spinner: NgxSpinnerService, private ListasService: ListasService, private route: ActivatedRoute) {
  this.form = this.fb.group({});
}

ngOnInit(): void {
  this.form = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
 
   
  });

  const local = history.state.local;
  if (local) {
    this.localId = local.id;
    this.form.patchValue({
      nombre: local.nombre,
      descripcion: local.descripcion,
     
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
    this.ListasService.crear(formValues).subscribe(
      data => {
        this.spinner.hide();
        if (data) {
          this.router.navigateByUrl('locales-listas');
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
  this.router.navigateByUrl('locales-listas');
}
}