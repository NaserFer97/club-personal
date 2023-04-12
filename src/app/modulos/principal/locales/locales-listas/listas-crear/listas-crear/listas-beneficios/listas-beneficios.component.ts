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
  selectedTabIndex: number;

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

  constructor(private router: Router,) {
    this.selectedTabIndex = this.isListasCrearActive() ? 0 : 1;
  }

  ngOnInit(): void {
    this.dataSource.sort((a, b) => a.lista.localeCompare(b.lista));
    this.dataSource = this.dataSource.slice(0, 15);
  }

  goToListasCrear() {
    this.router.navigateByUrl('/listas/crear');
  }

  goToListasBeneficios() {
    this.router.navigateByUrl('/listas-beneficio');
  }

  isListasCrearActive(): boolean {
    return this.router.isActive('/listas/crear', false);
  }

  isListasBeneficiosActive(): boolean {
    return this.router.isActive('/listas-beneficios', false);
  }

  onTabChange(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.goToListasCrear();
        break;
      case 1:
        this.goToListasBeneficios();
        break;
    }
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