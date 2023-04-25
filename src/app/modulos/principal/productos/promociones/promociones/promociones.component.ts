import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { ResumenCanjesService } from 'src/app/services/resumen-canjes/resumen-canjes.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss']
})
export class PromocionesComponent implements OnInit {



  displayedColumns: string[] = ['descripcion','palabra','fechaDesde','fechaHasta' ,'acciones']; dataSource: MatTableDataSource<any>;
  data: any = [{
    "id":1,
    "descripcion": "concierto",
    "palabra":"quiero",
    "fechaDesde":5,
    "fechaHasta":2,

   
    
  }, 
  {
    "id":1,
    "descripcion": "cine",
    "palabra":"quiero",
    "fechaDesde":5,
    "fechaHasta":2,
  }, 
  {
    "id":1,
    "descripcion": "Concierto",
    "palabra":"quiero",
    "fechaDesde":5,
    "fechaHasta":2,
  }, 
  {
    "id":1,
    "descripcion": "Consierto",
    "palabra":"quiero",
    "fechaDesde":5,
    "fechaHasta":2,
  }, 
  
];


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;


  ngOnInit() {
    this.listar();
  }

  constructor(private router: Router, private dialog: MatDialog, private ResumenCanjesService: ResumenCanjesService) {
    this.dataSource = new MatTableDataSource(this.data,);
    ;
  }

  listar(){
    this.ResumenCanjesService.listar().subscribe(
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

  borrar(row: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmación',
        message: '¿Está seguro de que desea eliminar ?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Aquí coloque el código para eliminar el local
        console.log('Local eliminado:', row);
        this.borrarElemento(row);
      }
    });
  }

  crear() {
    this.router.navigate(['productos/promociones-crear']);
  }

  editar(row: any) {
    this.router.navigate(['productos/promociones-crear'], { state: { local: row } });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  borrarElemento(row: any) {
    const index = this.data.findIndex((local: any) => local === row);
    if (index > -1) {
      this.data.splice(index, 1);
      this.updateDataSource();
    }
  }

  updateDataSource() {
    this.dataSource.data = this.data;
  }
}

