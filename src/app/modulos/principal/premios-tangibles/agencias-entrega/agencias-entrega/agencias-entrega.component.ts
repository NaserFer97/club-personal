import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { AgenciasEntregaService } from 'src/app/services/premios-tangibles/agencias-entrega/agencias-entrega.service';
@Component({
  selector: 'app-agencias-entrega',
  templateUrl: './agencias-entrega.component.html',
  styleUrls: ['./agencias-entrega.component.scss']
})
export class AgenciasEntregaComponent implements OnInit {


  displayedColumns: string[] = ['nombre', 'ciudad', 'zona', 'acciones']; dataSource: MatTableDataSource<any>;
  data: any = [{
    "id":1,
    "nombre": "Caacupe",
    "ciudad": "Caacupe",
    "zona": "Auncion",
   
  },
  {
    "id":1,
    "nombre": "Caacupe",
    "ciudad": "Caacupe",
    "zona": "Caacupe",
   
  },
  {
    "id":1,
    "nombre": "Caacupe",
    "ciudad": "Caacupe",
    "zona": "Caacupe",
   
  },


];


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;


  ngOnInit() {
    this.listar();
  }

  constructor(private router: Router, private dialog: MatDialog, private AgenciasEntregaService: AgenciasEntregaService) {
    this.dataSource = new MatTableDataSource(this.data,);
    ;
  }

  listar(){
    this.AgenciasEntregaService.listar().subscribe(
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
        message: '¿Está seguro de que desea eliminar esta ?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Aquí coloque el código para eliminar el local
        console.log('Agencia eliminada:', row);
        this.borrarElemento(row);
      }
    });
  }

  crear() {
    this.router.navigate(['premios-tangibles/agencias-crear']);
  }

  editar(row: any) {
    this.router.navigate(['premios-tangibles/agencias-crear'], { state: { local: row } });
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

