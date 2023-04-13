import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/cines/peliculas/peliculas.service';
@Component({
  selector: 'app-peliculas-crear',
  templateUrl: './peliculas-crear.component.html',
  styleUrls: ['./peliculas-crear.component.scss']
})
export class PeliculasCrearComponent implements OnInit {

  form: FormGroup;
  formInvalid = false;
  getErrorMessage: any = getErrorMessage;

  get generoControl() { return this.form.get('genero'); }
  get clasificacionControl() { return this.form.get('clasificacion'); }
  get actoresControl() { return this.form.get('actores'); }
  get directorControl() { return this.form.get('director'); }
  get trailerControl() { return this.form.get('trailer'); }
  get sinopsisControl() { return this.form.get('sinopsis'); }

  localId: number | null = null;

  constructor(private fb: FormBuilder, private router: Router, private spinner: NgxSpinnerService, private PeliculasService: PeliculasService, private route: ActivatedRoute) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      genero: ['', Validators.required],
      clasificacion: ['', Validators.required],
      actores: ['', Validators.required],
      director: ['', Validators.required],
      sitioWeb: [''],
      trailer: ['', Validators.required],
      sinopsis: ['', Validators.required],
      
    });

    const local = history.state.local;
    if (local) {
      this.localId = local.id;
      this.form.patchValue({
        nombre: local.nombre,
        genero: local.genero,
        clasificacion: local.clasificacion,
        actores: local.actores,
        director: local.director,
        sitioWeb: local.sitioWeb,
        trailer: local.trailer,
        sinopsis: local.sinopsis,
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
  
  
    setTimeout(() => {
      this.PeliculasService.crear(formValues).subscribe(
        data => {
          this.spinner.hide();
          if (data) {
            this.router.navigateByUrl('peliculas');
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
    this.router.navigateByUrl('peliculas');
  }
}