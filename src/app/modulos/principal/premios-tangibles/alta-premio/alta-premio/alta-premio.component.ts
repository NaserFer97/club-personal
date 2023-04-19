import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ReposicionStockDepositoService } from 'src/app/services/premios-tangibles/reposicion-stock-deposito/reposicion-stock-deposito.service';

@Component({
  selector: 'app-alta-premio',
  templateUrl: './alta-premio.component.html',
  styleUrls: ['./alta-premio.component.scss']
})
export class AltaPremioComponent implements OnInit {


  form: FormGroup;
  formInvalid = false;
  getErrorMessage: any = getErrorMessage;
 
  data: any[] = [];

  get cantidadControl() { return this.form.get('cantidad'); }
  get compraControl() { return this.form.get('compra'); }
  get observacionControl() { return this.form.get('observacion'); }
  get productoControl() { return this.form.get('producto'); }

  localId: number | null = null;

  constructor(private fb: FormBuilder, private router: Router, private spinner: NgxSpinnerService, private ReposicionStockDepositoService: ReposicionStockDepositoService, private route: ActivatedRoute) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      cantidad: ['', Validators.required],
      compra: ['', Validators.required],
      producto: ['', Validators.required],
      observacion: ['', ],
    });

    const local = history.state.local;
    if (local) {
      this.localId = local.id;
      this.form.patchValue({
        cantidad: local.cantidad,
        compra: local.compra,
        observacion: local.observacion,
        producto: local.producto,
      });
    }
  }
  listar(){
    this.ReposicionStockDepositoService.listar().subscribe(
      data => {
        if (data) {
          // {
          //  mensaje:"Locales listados correctamente",
          //  data: [],
          //  exito:true
          // }
          if(data){
            if(data.codigo==200){
              this.data = [...data.data];
            }
          }
        }
      },
      err => {
        var data = err.error;
      }
    );
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
      this.ReposicionStockDepositoService.crear(formValues).subscribe(
        data => {
          this.spinner.hide();
          if (data) {
            this.router.navigateByUrl('premios-tangibles/reposicion-stock');
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
  


 
}

