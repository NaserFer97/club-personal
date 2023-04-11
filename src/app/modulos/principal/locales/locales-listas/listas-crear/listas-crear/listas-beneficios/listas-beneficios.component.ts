import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listas-beneficios',
  templateUrl: './listas-beneficios.component.html',
  styleUrls: ['./listas-beneficios.component.scss']
})
export class ListasBeneficiosComponent implements OnInit {
 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToListasCrear() {
    this.router.navigateByUrl('/listas/crear'); 
  }

  goToListasBeneficios() {
    this.router.navigateByUrl('/listas-beneficio');
  }

}
