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

  constructor(private router: Router, private TrazabilidadBeneficiosService: TrazabilidadBeneficiosService) {
  
  }

  ngOnInit(): void {
   
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



 
  guardar() {

    this.router.navigateByUrl('locales-listas');
  }
  volver() {
    this.router.navigateByUrl('locales-listas');
  }

}