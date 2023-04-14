import { Component, OnInit } from '@angular/core';
import { ImportarCarteleraService } from 'src/app/services/cines/importar-cartelera/importar-cartelera.service';


@Component({
  selector: 'app-importar-cartelera',
  templateUrl: './importar-cartelera.component.html',
  styleUrls: ['./importar-cartelera.component.scss']
})
export class ImportarCarteleraComponent implements OnInit {

  constructor(private ImportarCarteleraService: ImportarCarteleraService) { }
  

  ngOnInit(): void {}

  
  

 
  guardar(){

  }

}
