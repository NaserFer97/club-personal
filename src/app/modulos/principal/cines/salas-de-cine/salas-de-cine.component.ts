import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { SalasDeCineService } from 'src/app/services/cines/Salas-de-cine/salas-de-cine.service';

@Component({
  selector: 'app-salas-de-cine',
  templateUrl: './salas-de-cine.component.html',
  styleUrls: ['./salas-de-cine.component.scss']
})
export class SalasDeCineComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'rubro', 'citioweb', 'acciones']; dataSource: MatTableDataSource<any>;
  data: any = [{
    "id":1,
    "nombre": "	Cines Multiplaza",
    "rubro": "Entretenimiento",
    "citioweb": "	http://www.multiplaza.com.py/cartelera.php",
  }, {
    "nombre": "Cines Itaú del Sol",
    "rubro": "Entretenimiento",
    "citioweb": "	http://www.cines.com.py/cine/2--Cines%20Ita%C3%BA%",
  }, {
    "nombre": "Cine Villamorra",
    "rubro": "Entretenimiento",
    "citioweb": "	http://www.villamorra.com.py/",
  }, {
    "nombre": "	Cines Itaú Pinedo",
    "rubro": "Entretenimiento",
    "citioweb": "	http://www.cinecenter.com.py/cines-pinedo/",
  },];


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;


  ngOnInit() {
    this.listar();
  }

  constructor(private router: Router, private dialog: MatDialog, private SalasDeCineService: SalasDeCineService) {
    this.dataSource = new MatTableDataSource(this.data,);
    ;
  }

  listar(){
    this.SalasDeCineService.listar().subscribe(
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
    this.router.navigate(['salas-de-cine-crear']);
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
}
