import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';


@Component({
  selector: 'app-listas-beneficios',
  templateUrl: './listas-beneficios.component.html',
  styleUrls: ['./listas-beneficios.component.scss']
})
export class ListasBeneficiosComponent implements OnInit {

  selectedTabIndex: number;
 

  constructor(private router: Router) {
    this.selectedTabIndex = this.isListasCrearActive() ? 0 : 1;
  }

  ngOnInit(): void {
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

}
