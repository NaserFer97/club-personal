import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { LocalService } from '../../../../services/locales-crear/local.service';






@Component({
  selector: 'app-locales-adheridos',
  templateUrl: './locales-adheridos.component.html',
  styleUrls: ['./locales-adheridos.component.scss']
})
export class LocalesAdheridosComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'rubro', 'tipo', 'acciones'];  dataSource: MatTableDataSource<any>;
  data: any = [{
    "nombre": "Shoes 4 Less",
    "rubro": "Calzado",
    "tipo": "COMERCIO",
    "web": "http://www.shoes4less.com.py"
  },{
    "nombre": "Shoes 4 Less",
    "rubro": "Calzado",
    "tipo": "COMERCIO",
    "web": "http://www.shoes4less.com.py"
  },{
    "nombre": "Shoes 4 Less",
    "rubro": "Calzado",
    "tipo": "COMERCIO",
    "web": "http://www.shoes4less.com.py"
  },{
    "nombre": "Shoes 4 Less",
    "rubro": "Calzado",
    "tipo": "COMERCIO",
    "web": "http://www.shoes4less.com.py"
  },{
    "nombre": "Shoes 4 Less",
    "rubro": "Calzado",
    "tipo": "COMERCIO",
    "web": "http://www.shoes4less.com.py"
  },{
    "nombre": "Shoes 4 Less",
    "rubro": "Calzado",
    "tipo": "COMERCIO",
    "web": "http://www.shoes4less.com.py"
  },{
    "nombre": "Shoes 4 Less",
    "rubro": "Calzado",
    "tipo": "COMERCIO",
    "web": "http://www.shoes4less.com.py"
  },{
    "nombre": "Shoes 4 Less",
    "rubro": "Calzado",
    "tipo": "COMERCIO",
    "web": "http://www.shoes4less.com.py"
  },{
    "nombre": "Shoes 4 Less",
    "rubro": "Calzado",
    "tipo": "COMERCIO",
    "web": "http://www.shoes4less.com.py"
  },{
    "nombre": "Shoes 4 Less",
    "rubro": "Calzado",
    "tipo": "COMERCIO",
    "web": "http://www.shoes4less.com.py"
  },{
    "nombre": "Shoes 4 Less",
    "rubro": "Calzado",
    "tipo": "COMERCIO",
    "web": "http://www.shoes4less.com.py"
  },{
    "nombre": "Shoes 4 Less",
    "rubro": "Calzado",
    "tipo": "COMERCIO",
    "web": "http://www.shoes4less.com.py"
  },{
    "nombre": "Shoes 4 Less",
    "rubro": "Calzado",
    "tipo": "COMERCIO",
    "web": "http://www.shoes4less.com.py"
  },{
    "nombre": "Shoes 4 Less",
    "rubro": "Calzado",
    "tipo": "COMERCIO",
    "web": "http://www.shoes4less.com.py"
  },];


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  

  ngOnInit() {

    this.localService.updatedLocal$.subscribe((updatedLocal) => {
      if (updatedLocal) {
        this.updateLocal(updatedLocal);
      }
    });
    

  }

  constructor(private router: Router, private dialog: MatDialog, private localService: LocalService) {
    this.dataSource = new MatTableDataSource(this.data,);
    window.addEventListener('popstate', this.handlePopState.bind(this));
  }
  
  handlePopState(event: PopStateEvent) {
    if (event.state && event.state.local) {
      this.updateLocal(event.state.local);
    }
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

  crearLocal() {
    this.router.navigate(['/locales/crear']);
  }

  editarLocal(row: any) {
    this.router.navigate(['/locales/crear'], { state: { local: row } });
  }
  updateLocal(updatedLocal: any) {
    const index = this.data.findIndex((local: any) => local.nombre === updatedLocal.nombre);
    if (index > -1) {
      this.data[index] = updatedLocal;
      this.updateDataSource();
    }
  }

  borrarLocal(row: any) {
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
        this.removeLocal(row);
      }
    });
  }
  
  removeLocal(row: any) {
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
