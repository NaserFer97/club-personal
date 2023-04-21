import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ReposicionStockDepositoService } from 'src/app/services/premios-tangibles/reposicion-stock-deposito/reposicion-stock-deposito.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-reposicion-stock',
  templateUrl: './reposicion-stock.component.html',
  styleUrls: ['./reposicion-stock.component.scss'],
})
export class ReposicionStockComponent implements OnInit {
  form: FormGroup;
  formInvalid = false;
  getErrorMessage: any = getErrorMessage;
  panelOpenState = false;
  data: any[] = [];

  lineas = [
    { id: 1, text: 'Bolso Termico' },
    { id: 2, text: '2x1' },
    { id: 3, text: 'Abridor de Pared' },
    { id: 4, text: 'Kit Parrillero' },
    
  ];

  filteredLineas: Observable<{ id: number; text: string; }[]> | undefined;
  productoFilterControl = new FormControl();

  get cantidadControl() {
    return this.form.get('cantidad');
  }
  get compraControl() {
    return this.form.get('compra');
  }
  get observacionControl() {
    return this.form.get('observacion');
  }
  get productoControl() {
    return this.form.get('producto');
  }

  localId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private ReposicionStockDepositoService: ReposicionStockDepositoService,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      cantidad: ['', Validators.required],
      compra: ['', Validators.required],
      producto: ['', Validators.required],
      observacion: [''],
    });

    const local = history.state.local;
    if (local) {
      this.localId = local.id;
      const producto = this.lineas.find((l) => l.id === local.producto);
      this.form.patchValue({
        cantidad: local.cantidad,
        compra: local.compra,
        
      });
    }

    this.filteredLineas = this.form.controls['producto'].valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.text),
      map(text => text ? this._filter(text) : this.lineas.slice())
    );
  }

  private _filter(value: string): { id: number; text: string }[] {
    const filterValue = value.toLowerCase();
  
    return this.lineas.filter(option => option.text.toLowerCase().includes(filterValue));
  }

  listar() {
    this.ReposicionStockDepositoService.listar().subscribe(
      (data) => {
        if (data) {
          if (data.codigo == 200) {
            this.data = [...data.data];
          }
        }
      },
      (err) => {
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
  
    setTimeout(() => {
      this.ReposicionStockDepositoService.crear(formValues).subscribe(
        (data) => {
          this.spinner.hide();
          if (data) {
            this.router.navigateByUrl('premios-tangibles/reposicion-stock');
          }
        },
        (err) => {
          this.spinner.hide();
          var data = err.error;
          //mostrar mensaje al usuario
        }
      );
    }, 500);
  }
  
  displayFn(option: { id: number; text: string } | null): string {
    return option ? option.text : '';
  }
  
  optionSelected(event: MatAutocompleteSelectedEvent): void {
    if (event && event.option) {
      const selectedOption = this.lineas.find(
        (l) => l.id === event.option.value
      );
      this.form.get('producto')?.setValue(selectedOption);
    }
  }
}