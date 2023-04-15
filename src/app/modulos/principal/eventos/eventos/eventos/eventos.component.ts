import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { EventosService } from 'src/app/services/eventos/eventos/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {


  displayedColumns: string[] = ['nombre','tipo','lugar', 'acciones']; dataSource: MatTableDataSource<any>;
  data: any = [{
    "id":1,
    "nombre": "KillFest2023!",
    "tipo": "concierto",
    "lugar": "conmebol",
    
  }, 
  {
    "id":1,
    "nombre": "Sacramento Autocinema",
    "tipo": "cine",
    "lugar": "Sacramento Autocinema",
    
  }, 
  {
    "id":1,
    "nombre": "KEANE",
    "tipo": "Concierto",
    "lugar": "Jockey Club Paraguayo",
    
  }, 
  {
    "id":1,
    "nombre": "Asuncionico 2023",
    "tipo": "Consierto",
    "lugar": "Comite Olimpico Paraguayo",
    
  }, 
  
];


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;


  ngOnInit() {
    this.listar();
  }

  constructor(private router: Router, private dialog: MatDialog, private EventosService: EventosService) {
    this.dataSource = new MatTableDataSource(this.data,);
    ;
  }

  listar(){
    this.EventosService.listar().subscribe(
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
    this.router.navigate(['/eventos/crear']);
  }

  editar(row: any) {
    this.router.navigate(['/eventos/crear'], { state: { local: row } });
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

