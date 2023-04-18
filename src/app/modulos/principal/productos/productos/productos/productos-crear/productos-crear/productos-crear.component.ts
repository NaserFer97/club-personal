import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos/productos/productos.service';

@Component({
  selector: 'app-productos-crear',
  templateUrl: './productos-crear.component.html',
  styleUrls: ['./productos-crear.component.scss']
})
export class ProductosCrearComponent implements OnInit {


  form: FormGroup;
  formInvalid = false;
  getErrorMessage: any = getErrorMessage;

  get nombreControl() { return this.form.get('nombre'); }
  get descripcionControl() { return this.form.get('descripcion'); }
  get costoControl() { return this.form.get('costo'); }
  get puntosControl() { return this.form.get('puntos'); }
  get disponibleControl() { return this.form.get('disponible'); }
  get aplicableControl() { return this.form.get('aplicable'); }
  get tipoControl() { return this.form.get('tipo'); }

  localId: number | null = null;

  constructor(private fb: FormBuilder, private router: Router, private spinner: NgxSpinnerService, private ProductosService: ProductosService, private route: ActivatedRoute) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      costo: ['',Validators.required],
      puntos: ['',Validators.required],
      disponible: [false],
      aplicable: [false],
      tipo: ['', Validators.required],
    });

    const local = history.state.local;
    if (local) {
      this.localId = local.id;
      this.form.patchValue({
        nombre: local.nombre,
        descripcion: local.descripcion,
        costo: local.costo,
        puntos: local.puntos,
        disponible: local.disponible,
        aplicable: local.aplicable,
        tipo: local.tipo,
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
      this.ProductosService.crear(formValues).subscribe(
        data => {
          this.spinner.hide();
          if (data) {
            this.router.navigateByUrl('/productos/productos');
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
    this.router.navigateByUrl('/productos/productos');
  }
}
