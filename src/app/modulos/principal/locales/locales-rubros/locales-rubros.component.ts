import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { RubrosService } from 'src/app/services/locales/rubros/rubros.service';

@Component({
  selector: 'app-locales-rubros',
  templateUrl: './locales-rubros.component.html',
  styleUrls: ['./locales-rubros.component.scss']
})
export class LocalesRubrosComponent implements OnInit {

  displayedColumns: string[] = ['descripcion', 'codigo', 'acciones'];  dataSource: MatTableDataSource<any>;
  data: any = [{
    "descripcion": "Deportes & Fitness",
    "codigo": "Deportes",
  },{
    "descripcion": "Deportes & Fitness",
    "codigo": "Deportes",
  },{
    "descripcion": "Deportes & Fitness",
    "codigo": "Deportes",
  },{
    "descripcion": "Deportes & Fitness",
    "codigo": "Deportes",
  },{
    "descripcion": "Deportes & Fitness",
    "codigo": "Deportes",
  },{
    "descripcion": "Deportes & Fitness",
    "codigo": "Deportes",
  },{
    "descripcion": "Deportes & Fitness",
    "codigo": "Deportes",
  },{
    "descripcion": "Deportes & Fitness",
    "codigo": "Deportes",
  },{
    "descripcion": "Deportes & Fitness",
    "codigo": "Deportes",
  },{
  
    "descripcion": "Deportes & Fitness",
    "codigo": "Deportes",
  },];


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  

  ngOnInit() {

 

  }

  constructor(private router: Router, private dialog: MatDialog, private RubrosService: RubrosService) {
    this.dataSource = new MatTableDataSource(this.data,);
    ;
  }

  listar(){
    this.RubrosService.listar().subscribe(
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

  crear() {
    this.router.navigate(['/rubros/crear']);
  }

  editar(row: any) {
    this.router.navigate(['/rubros/crear'], { state: { local: row } });
  }
 

  borrar(row: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmación',
        message: '¿Está seguro de que desea eliminar este rubro?'
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       
        console.log('Local eliminado:', row);
        this.borrarElemento(row);
      }
    });
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