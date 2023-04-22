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
import { FormControl } from '@angular/forms';




@Component({
  selector: 'app-resumen-canjes',
  templateUrl: './resumen-canjes.component.html',
  styleUrls: ['./resumen-canjes.component.scss']
})
export class ResumenCanjesComponent implements OnInit {



  
  displayedColumns2: string[] = ['id', 'producto', 'linea', 'fecha', 'cantidad','estado','agencia'];
  fecha = new FormControl();

  data: any = [
    {
      "id":101,
      "producto": "Mochila Notebook",
      "linea": 971553337,
      "desdePicker": 20,
      "hastaPicker": 20,
      "cantidad": 1,
      "estado": "TRANSITO",
      "agencia": "Shopping Multiplaza",
    },
    {
      "id":101,
      "producto": "Mochila Notebook",
      "linea": 971553337,
      "desdePicker": 20,
      "hastaPicker": 20,
      "cantidad": 1,
      "estado": "TRANSITO",
      "agencia": "Shopping Multiplaza",
    },
    {
      "id":101,
      "producto": "Mochila Notebook",
      "linea": 971553337,
      "desdePicker": 20,
      "hastaPicker": 20,
      "cantidad": 1,
      "estado": "TRANSITO",
      "agencia": "Shopping Multiplaza",
    },
    {
      "id":101,
      "producto": "Mochila Notebook",
      "linea": 971553337,
      "desdePicker": 20,
      "hastaPicker": 20,
      "cantidad": 1,
      "estado": "TRANSITO",
      "agencia": "Shopping Multiplaza",
    },
    {
      "id":101,
      "producto": "Mochila Notebook",
      "linea": 971553337,
      "desdePicker": 20,
      "hastaPicker": 20,
      "cantidad": 1,
      "estado": "TRANSITO",
      "agencia": "Shopping Multiplaza",
    },
    {
      "id":101,
      "producto": "Mochila Notebook",
      "linea": 971553337,
      "desdePicker": 20,
      "hastaPicker": 20,
      "cantidad": 1,
      "estado": "TRANSITO",
      "agencia": "Shopping Multiplaza",
    },
    
  ];
  
  estado = [
    { value: 'estado1', viewValue: 'TODOS' },
    { value: 'estado2', viewValue: 'TRANSITO' },
    { value: 'estado3', viewValue: 'RESERVA' },
    { value: 'estado4', viewValue: 'RECEPCIONADO' },
    { value: 'estado5', viewValue: 'DESPACHADO' },
    { value: 'estado6', viewValue: 'FINALIZADO' },
    { value: 'estado7', viewValue: 'DEVUELTO' },   
  ];
  sucursal = [
    { value: 'sucursal1', viewValue: 'TRANSITO' },
    { value: 'sucursal2', viewValue: 'TODOS' },
    { value: 'sucursal3', viewValue: 'RESERVA' },
    { value: 'sucursal4', viewValue: 'RECEPCIONADO' },
    { value: 'sucursal5', viewValue: 'DESPACHADO' },
    { value: 'sucursal6', viewValue: 'FINALIZADO' },
    { value: 'sucursal7', viewValue: 'DEVUELTO' },   
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