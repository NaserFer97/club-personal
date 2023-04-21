import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss']
})
export class ProductoDetalleComponent {
  displayedColumns: string[] = ['estado', 'cantidad'];
  dataSource: MatTableDataSource<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { producto: any }) {
[{
    "id":1,
    "codigo": "14568745",
    "descripcion": "Bolso Termico Chenson",
    "deposito": "90",
    "disponible": "34",
    "reserva": "5",
    "devuelto": "0"
  },];
    const exampleData = [
      { estado: 'En depósito', cantidad: 10 },
      { estado: 'En reserva', cantidad: 5 },
    ];

    this.dataSource = new MatTableDataSource(exampleData);
  }
}
