import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-locales-adheridos',
  templateUrl: './locales-adheridos.component.html',
  styleUrls: ['./locales-adheridos.component.scss']
})
export class LocalesAdheridosComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'rubro', 'tipo', 'web'];
  dataSource: MatTableDataSource<any>;
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

  }

  constructor() {
    this.dataSource = new MatTableDataSource(this.data);
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
}
