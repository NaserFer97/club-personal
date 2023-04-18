import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { ProductosService } from 'src/app/services/productos/productos/productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'descripcion', 'cantidad','tipo','tprem','promocion','puntos','activo', 'acciones']; dataSource: MatTableDataSource<any>;
  data: any = [{
    "id":1,
    "codigo": "1035",
    "descripcion": "Bolso termico Chenson",
    "cantidad": "0",
    "tipo": "Tangible",
    "tprem": "",
    "promocion": "",
    "puntos": 600
  }, 
  {
    "id":1,
    "codigo": "1035",
    "descripcion": "Bolso termico Chenson",
    "cantidad": "0",
    "tipo": "Tangible",
    "tprem": "",
    "promocion": "",
    "puntos": 600
  },
  {
    "id":1,
    "codigo": "1035",
    "descripcion": "Bolso termico Chenson",
    "cantidad": "0",
    "tipo": "Tangible",
    "tprem": "",
    "promocion": "",
    "puntos": 600
  },
  {
    "id":1,
    "codigo": "1035",
    "descripcion": "Bolso termico Chenson",
    "cantidad": "0",
    "tipo": "Tangible",
    "tprem": "",
    "promocion": "",
    "puntos": 600
  },
  {
    "id":1,
    "codigo": "1035",
    "descripcion": "Bolso termico Chenson",
    "cantidad": "0",
    "tipo": "Tangible",
    "tprem": "",
    "promocion": "",
    "puntos": 600
  },
  {
    "id":1,
    "codigo": "1035",
    "descripcion": "Bolso termico Chenson",
    "cantidad": "0",
    "tipo": "Tangible",
    "tprem": "",
    "promocion": "",
    "puntos": 600
  },

];


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;


  ngOnInit() {
    this.listar();
  }

  constructor(private router: Router, private dialog: MatDialog, private ProductosService: ProductosService) {
    this.dataSource = new MatTableDataSource(this.data,);
    ;
  }

  listar(){
    this.ProductosService.listar().subscribe(
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
        message: '¿Está seguro de que desea eliminar?'
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
    this.router.navigate(['productos/productos-crear']);
  }

  editar(row: any) {
    this.router.navigate(['productos/productos-crear'], { state: { local: row } });
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
  activo(row: any) {
    console.log('Cambio de estado del checkbox:', row);
    this.ProductosService.actualizarActivo(row.id, row.activo).subscribe(
      response => {
        console.log('Estado actualizado con éxito:', response);
      },
      error => {
        console.error('Error al actualizar el estado:', error);
      }
    );
  }
  
}
