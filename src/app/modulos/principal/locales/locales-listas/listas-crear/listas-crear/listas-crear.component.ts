import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ListasService } from 'src/app/services/locales/listas/listas.service';
import { MatSelectionList } from '@angular/material/list';


@Component({
  selector: 'app-listas-crear',
  templateUrl: './listas-crear.component.html',
  styleUrls: ['./listas-crear.component.scss']
})
export class ListasCrearComponent implements OnInit {

  form: FormGroup;
  formInvalid = false;
  getErrorMessage: any = getErrorMessage;
  data: any[] | undefined;



  get nombreControl() { return this.form.get('nombre'); }
  get rubroControl() { return this.form.get('rubro'); }
  get fechaControl() { return this.form.get('fecha'); }

  localId: number | null = null;

  filterValue = '';
  displayedColumns1: string[] = ['lista'];
  dataSource = [
    { lista: 'Asuncion Gran Hotel - Descuento' },
    { lista: 'cine Fuentes - 2x1 ' },
    { lista: 'Cines Itau del Sol - 2x1' },
    { lista: 'Five Hotel - Day Use' },
    { lista: 'INDIO - Descuento' },
    
  ];

  beneficiosSeleccionados = [
    { lista: '' },
   
  ];

  @ViewChild('marcasList', { static: false }) lista?: MatSelectionList;


  constructor(private fb: FormBuilder, private router: Router, private spinner: NgxSpinnerService, private ListasService: ListasService, private route: ActivatedRoute) {
  this.form = this.fb.group({});
}

ngOnInit(): void {
  
  this.dataSource.sort((a, b) => a.lista.localeCompare(b.lista));
  this.dataSource = this.dataSource.slice(0, 15);
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

listar(){
  this.ListasService.listar().subscribe(
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
  
applyFilter() {
  this.dataSource = this.dataSource.filter(row =>
    Object.values(row).some(value =>
      value.toLowerCase().includes(this.filterValue.toLowerCase())
    )
  );
}
addSelectedOptions() {
  if (this.lista) {
    const selectedOptions = this.lista.selectedOptions.selected.map((option: { value: any; }) => option.value);
    if (selectedOptions) {
      this.beneficiosSeleccionados.push(...selectedOptions);
      this.dataSource = this.dataSource.filter(row => !selectedOptions.includes(row));
    }
    this.lista.deselectAll();
  }
}

removeSelectedOptions() {
  if (this.lista) {
    const selectedOptions = this.lista.selectedOptions.selected.map((option: { value: any; }) => option.value);
    if (selectedOptions) {
      this.dataSource.push(...selectedOptions);
      this.beneficiosSeleccionados = this.beneficiosSeleccionados.filter(row => !selectedOptions.includes(row));
    }
    this.lista.deselectAll();
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