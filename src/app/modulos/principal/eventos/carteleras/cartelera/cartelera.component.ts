import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { CarteleraService } from 'src/app/services/eventos/carteleras/cartelera.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.scss']
})
export class CarteleraComponent implements OnInit {



  displayedColumns: string[] = ['descripcion','fechaDesde','fechaHasta' ,'acciones']; dataSource: MatTableDataSource<any>;
  data: any = [{
    "id":1,
    "descripcion": "concierto",
    "fechaDesde":5,
    "fechaHasta":2,

   
    
  }, 
  {
    "id":1,
    "descripcion": "cine",
    "fechaDesde":5,
    "fechaHasta":2,
  }, 
  {
    "id":1,
    "descripcion": "Concierto",
    "fechaDesde":5,
    "fechaHasta":2,
  }, 
  {
    "id":1,
    "descripcion": "Consierto",
    "fechaDesde":5,
    "fechaHasta":2,
  }, 
  
];


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;


  ngOnInit() {
    this.listar();
  }

  constructor(private router: Router, private dialog: MatDialog, private CarteleraService: CarteleraService) {
    this.dataSource = new MatTableDataSource(this.data,);
    ;
  }

  listar(){
    this.CarteleraService.listar().subscribe(
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
        message: '¿Está seguro de que desea eliminar este evento?'
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
    this.router.navigate(['eventos/cartelera-crear']);
  }

  editar(row: any) {
    this.router.navigate(['eventos/cartelera-crear'], { state: { local: row } });
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


