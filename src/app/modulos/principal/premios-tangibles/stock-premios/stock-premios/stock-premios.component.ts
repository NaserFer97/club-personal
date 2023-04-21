import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle/producto-detalle.component';
import { StockPremiosService } from 'src/app/services/premios-tangibles/stock-premios/stock-premios.service';


@Component({
  selector: 'app-stock-premios',
  templateUrl: './stock-premios.component.html',
  styleUrls: ['./stock-premios.component.scss']
})
export class StockPremiosComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descripcion', 'deposito','disponible','reserva','devuelto', 'acciones']; dataSource: MatTableDataSource<any>;
  data: any = [{
    "id":1,
    "codigo": "14568745",
    "descripcion": "Bolso Termico Chenson",
    "deposito": "90",
    "disponible": "34",
    "reserva": "5",
    "devuelto": "0"
  },
  {
    "id":1,
    "codigo": "14568745",
    "descripcion": "Bolso Termico Chenson",
    "deposito": "90",
    "disponible": "34",
    "reserva": "5",
    "devuelto": "0"
  },
  {
    "id":1,
    "codigo": "14568745",
    "descripcion": "Bolso Termico Chenson",
    "deposito": "90",
    "disponible": "34",
    "reserva": "5",
    "devuelto": "0"
  },
  {
    "id":1,
    "codigo": "14568745",
    "descripcion": "Bolso Termico Chenson",
    "deposito": "90",
    "disponible": "34",
    "reserva": "5",
    "devuelto": "0"
  }

];


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;


  ngOnInit() {
    this.listar();
  }

  constructor(private router: Router, private dialog: MatDialog, private StockPremiosService: StockPremiosService) {
    this.dataSource = new MatTableDataSource(this.data,);
    ;
  }

  listar(){
    this.StockPremiosService.listar().subscribe(
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
        message: '¿Está seguro de que desea eliminar este local?'
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
    this.router.navigate(['/locales/crear']);
  }

  editar(row: any) {
    this.router.navigate(['/locales/crear'], { state: { local: row } });
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
  verDetalle(row: any) {
    const dialogRef = this.dialog.open(ProductoDetalleComponent, {
      data: { producto: row },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      // Aquí puedes manejar el resultado cuando el diálogo se cierre, si es necesario
      console.log('Dialog result:', result);
    });
  }
}