import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-listas-beneficios',
  templateUrl: './listas-beneficios.component.html',
  styleUrls: ['./listas-beneficios.component.scss']
})
export class ListasBeneficiosComponent implements OnInit {

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
  displayedColumns2: string[] = ['fecha', 'idCanje', 'linea', 'comercio', 'beneficio', 'origen'];
  

  data: any = [
    {
      "fecha":1,
      "idCanje": 1,
      "linea": "Calzado",
      "comercio": "COMERCIO",
      "beneficio": "http://www.shoes4less.com.py",
      "origen": "http://www.shoes4less.com.py",
    }
    
  ];

  @ViewChild('marcasList', { static: false }) lista?: MatSelectionList;
  @ViewChild('beneficiosList', { static: false }) beneficiosLista?: MatSelectionList;
  spinner: any;
  localId: any;
  localService: any;

  constructor(private router: Router,) {
  
  }

  ngOnInit(): void {
    this.dataSource.sort((a, b) => a.lista.localeCompare(b.lista));
    this.dataSource = this.dataSource.slice(0, 15);
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