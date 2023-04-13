import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { PeliculasService } from 'src/app/services/cines/peliculas/peliculas.service';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'genero', 'clasificacion','actores','activo', 'acciones']; dataSource: MatTableDataSource<any>;
  data: any = [{
    "id":1,
    "nombre": "Spider-man: Lejos De Casa",
    "genero": "Animación",
    "clasificacion": "APTA TODO PUBLICO",
    "actores": "	Tom Holland,/ Zendaya, Jake Gyllenhaal."
  },  {
    "id":1,
    "nombre": "Spider-man: Lejos De Casa",
    "genero": "Animación",
    "clasificacion": "APTA TODO PUBLICO",
    "actores": "	Tom Holland,/ Zendaya, Jake Gyllenhaal."
  }, {
    "id":1,
    "nombre": "Spider-man: Lejos De Casa",
    "genero": "Animación",
    "clasificacion": "APTA TODO PUBLICO",
    "actores": "	Tom Holland,/ Zendaya, Jake Gyllenhaal."
  },
  {
    "id":1,
    "nombre": "Spider-man: Lejos De Casa",
    "genero": "Animación",
    "clasificacion": "APTA TODO PUBLICO",
    "actores": "	Tom Holland,/ Zendaya, Jake Gyllenhaal."
  },
  {
    "id":1,
    "nombre": "Spider-man: Lejos De Casa",
    "genero": "Animación",
    "clasificacion": "APTA TODO PUBLICO",
    "actores": "	Tom Holland,/ Zendaya, Jake Gyllenhaal."
  },
  {
    "id":1,
    "nombre": "Spider-man: Lejos De Casa",
    "genero": "Animación",
    "clasificacion": "APTA TODO PUBLICO",
    "actores": "	Tom Holland,/ Zendaya, Jake Gyllenhaal."
  },
  {
    "id":1,
    "nombre": "Spider-man: Lejos De Casa",
    "genero": "Animación",
    "clasificacion": "APTA TODO PUBLICO",
    "actores": "	Tom Holland,/ Zendaya, Jake Gyllenhaal."
  }

];


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;


  ngOnInit() {
    this.listar();
  }

  constructor(private router: Router, private dialog: MatDialog, private PeliculasService: PeliculasService) {
    this.dataSource = new MatTableDataSource(this.data,);
    ;
  }

  listar(){
    this.PeliculasService.listar().subscribe(
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
    this.router.navigate(['/peliculas-crear']);
  }

  editar(row: any) {
    this.router.navigate(['/peliculas-crear'], { state: { local: row } });
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
    this.PeliculasService.actualizarActivo(row.id, row.activo).subscribe(
      response => {
        console.log('Estado actualizado con éxito:', response);
      },
      error => {
        console.error('Error al actualizar el estado:', error);
      }
    );
  }
  
}

