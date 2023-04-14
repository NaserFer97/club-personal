import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { getErrorMessage } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ListasService } from 'src/app/services/locales/listas/listas.service';
import { TrazabilidadBeneficiosService } from 'src/app/services/locales/trazabilidad-beneficios/trazabilidad-beneficios.service';
import { MatSelectionList } from '@angular/material/list';
@Component({
  selector: 'app-locales-beneficios',
  templateUrl: './locales-beneficios.component.html',
  styleUrls: ['./locales-beneficios.component.scss']
})
export class LocalesBeneficiosComponent implements OnInit {
  
  


  filterValue = '';
  displayedColumns: string[] = ['lista'];
  dataSource = [
    { lista: 'Acer' },
    { lista: 'Apple' },
    { lista: 'Asus' },
    { lista: 'Dell' },
    { lista: 'Google' },
    { lista: 'HP' },
    { lista: 'Huawei' },
    { lista: 'Lenovo' },
    { lista: 'LG' },
    { lista: 'Microsoft' },
    { lista: 'MSI' },
    { lista: 'Razer' },
    { lista: 'Samsung' },
    { lista: 'Sony' },
    { lista: 'Toshiba' },
    { lista: 'Xiaomi' },
    { lista: 'Nokia' },
    { lista: 'OnePlus' },
    { lista: 'Motorola' },
    { lista: 'Oppo' },
  ];

  beneficiosDataSource = [
    { marca: 'Samsung' },
    { marca: 'Apple' },
  ];

  @ViewChild('marcasList', { static: false }) lista?: MatSelectionList;
  @ViewChild('beneficiosList', { static: false }) beneficiosLista?: MatSelectionList;
  
  spinner: any;
  localId: any;
  localService: any;
  data: any[] | undefined;

  constructor(private router: Router, private TrazabilidadBeneficiosService: TrazabilidadBeneficiosService) {
  
  }

  ngOnInit(): void {
    this.dataSource.sort((a, b) => a.lista.localeCompare(b.lista));
    this.dataSource = this.dataSource.slice(0, 15);
  }


  listar(){
    this.TrazabilidadBeneficiosService.listar().subscribe(
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
      const selectedOptions = this.lista.selectedOptions.selected.map(option => option.value);
      if (selectedOptions) {
        this.beneficiosDataSource.push(...selectedOptions);
        this.dataSource = this.dataSource.filter(row => !selectedOptions.includes(row));
      }
      this.lista.deselectAll();
    }
  }

  removeSelectedOptions() {
    if (this.beneficiosLista) {
      const selectedOptions = this.beneficiosLista.selectedOptions.selected.map(option => option.value);
      if (selectedOptions) {
        this.dataSource.push(...selectedOptions);
        this.beneficiosDataSource = this.beneficiosDataSource.filter(row => !selectedOptions.includes(row));
      }
      this.beneficiosLista.deselectAll();
    }
  }
  guardar() {

    this.router.navigateByUrl('locales-listas');
  }
  volver() {
    this.router.navigateByUrl('locales-listas');
  }

}