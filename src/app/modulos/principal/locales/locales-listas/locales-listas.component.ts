import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { ListasService } from 'src/app/services/locales/listas/listas.service';
@Component({
  selector: 'app-locales-listas',
  templateUrl: './locales-listas.component.html',
  styleUrls: ['./locales-listas.component.scss']
})
export class LocalesListasComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'descripcion', 'acciones']; dataSource: MatTableDataSource<any>;
  data: any = [
    {
      "nombre": "Deportes & Fitness",
      "descripcion": "Deportes",
    },
    {
      "nombre": "Deportes & Fitness",
      "descripcion": "Deportes",
    },
    {
      "nombre": "Deportes & Fitness",
      "descripcion": "Deportes",
    },
    {
      "nombre": "Deportes & Fitness",
      "descripcion": "Deportes",
    },
    {
      "nombre": "Deportes & Fitness",
      "descripcion": "Deportes",
    },
    {
      "nombre": "Deportes & Fitness",
      "descripcion": "Deportes",
    },
    {
      "nombre": "Deportes & Fitness",
      "descripcion": "Deportes",
    },
    {
      "nombre": "Deportes & Fitness",
      "descripcion": "Deportes",
    },
    {
      "nombre": "Deportes & Fitness",
      "descripcion": "Deportes",
    },
    {
      "nombre": "Deportes & Fitness",
      "descripcion": "Deportes",
    },
    {
      "nombre": "Deportes & Fitness",
      "descripcion": "Deportes",
    },





  ];


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;


  ngOnInit() {



  }

  constructor(private router: Router, private dialog: MatDialog,private ListasService: ListasService) {
    this.dataSource = new MatTableDataSource(this.data, );
    ;
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
    this.router.navigate(['listas/crear']);
  }

  editar(row: any) {
    this.router.navigate(['listas/crear'], { state: { local: row } });
  }

  borrar(row: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmación',
        message: '¿Está seguro de que desea eliminar esta lista?'
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