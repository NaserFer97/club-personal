import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { EntregarPremioService } from 'src/app/services/premios-tangibles/entregar-premio/entregar-premio.service';
@Component({
  selector: 'app-entregar-premio',
  templateUrl: './entregar-premio.component.html',
  styleUrls: ['./entregar-premio.component.scss']
})
export class EntregarPremioComponent implements OnInit {

  form: FormGroup;
  formInvalid = false;
  getErrorMessage: any = getErrorMessage;

  get lineaControl() { return this.form.get('linea'); }


  localId: number | null = null;

  constructor(private fb: FormBuilder, private router: Router, private spinner: NgxSpinnerService, private EntregarPremioService: EntregarPremioService, private route: ActivatedRoute) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      linea: ['', Validators.required],

    });

    const local = history.state.local;
    if (local) {
      this.localId = local.id;
      this.form.patchValue({
        linea: local.linea,
    
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
      this.EntregarPremioService.crear(formValues).subscribe(
        data => {
          this.spinner.hide();
          if (data) {
            this.router.navigateByUrl('locales-adheridos');
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

