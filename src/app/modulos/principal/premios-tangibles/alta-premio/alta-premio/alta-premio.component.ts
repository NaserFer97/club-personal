import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AltaPremioService } from 'src/app/services/premios-tangibles/alta-premio/alta-premio.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
@Component({
  selector: 'app-alta-premio',
  templateUrl: './alta-premio.component.html',
  styleUrls: ['./alta-premio.component.scss']
})
export class AltaPremioComponent implements OnInit {

  productos = [
    { id: 1, text: 'Bolso Termico' },
    { id: 2, text: '2x1' },
    { id: 3, text: 'Abridor de Pared' },
    { id: 4, text: 'Kit Parrillero' },
    
  ];


  form: FormGroup;
  formInvalid = false;
  getErrorMessage: any = getErrorMessage;
 
  data: any[] = [];

  get cantidadTControl() { return this.form.get('cantidadT'); }
  get productoControl() { return this.form.get('producto'); }
  localId: number | null = null;

  filteredLineas: Observable<{ id: number; text: string; }[]> | undefined;
  productoFilterControl = new FormControl();


  constructor(private fb: FormBuilder, private router: Router, private spinner: NgxSpinnerService, private AltaPremioService: AltaPremioService, private route: ActivatedRoute) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      cantidadT: ['', Validators.required],
      producto: ['', Validators.required],
      observacion: [''],
    });

    const local = history.state.local;
    if (local) {
      this.localId = local.id;
      const producto = this.productos.find((l) => l.id === local.producto);
      this.form.patchValue({
        cantidad: local.cantidad,
        compra: local.compra,
        
      });
    }

    this.filteredLineas = this.form.controls['producto'].valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.text),
      map(text => text ? this._filter(text) : this.productos.slice())
    );
  }

  private _filter(value: string): { id: number; text: string }[] {
    const filterValue = value.toLowerCase();
  
    return this.productos.filter(option => option.text.toLowerCase().includes(filterValue));
  }

  listar() {
    this.AltaPremioService.listar().subscribe(
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
      this.AltaPremioService.crear(formValues).subscribe(
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
      const selectedOption = this.productos.find(
        (l) => l.id === event.option.value
      );
      this.form.get('producto')?.setValue(selectedOption);
    }
  }
}