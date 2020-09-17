import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface ProductosObject {
  ID: number;
  ColumnaNombre: string;
  ColumnaTipo: string;
  ColumnaOrigen: string;
  ColumnaPrecio: string;
}

const ElementosTabla: ProductosObject[] = [
  { ID: 1, ColumnaNombre: 'ASPIRINA', ColumnaTipo: 'PASTILLA', ColumnaOrigen: 'ALEMANIA', ColumnaPrecio: '8.34' },
  { ID: 2, ColumnaNombre: 'OMEPRAZOL', ColumnaTipo: 'CAPSULA', ColumnaOrigen: 'FRANCIA', ColumnaPrecio: '49.66' },
  { ID: 3, ColumnaNombre: 'LEXOTIROXINA SODICA', ColumnaTipo: 'LIQUIDA', ColumnaOrigen: 'BRASIL', ColumnaPrecio: '16.26' },
  { ID: 4, ColumnaNombre: 'RAMIPRIL', ColumnaTipo: 'JARABE', ColumnaOrigen: 'ITALIA', ColumnaPrecio: '43.13' },
  { ID: 5, ColumnaNombre: 'WARFARINA SODICA', ColumnaTipo: 'INYECTADA', ColumnaOrigen: 'COSTA RICA', ColumnaPrecio: '74.86' },
  { ID: 6, ColumnaNombre: 'SALBUTAMOL', ColumnaTipo: 'PASTILLA', ColumnaOrigen: 'ARGENTINA', ColumnaPrecio: '42.38' },
  { ID: 7, ColumnaNombre: 'PARACETAMOL', ColumnaTipo: 'CAPSULA', ColumnaOrigen: 'GUATEMALA', ColumnaPrecio: '81.42' },
  { ID: 8, ColumnaNombre: 'BENDROFLUMETIAZIDA', ColumnaTipo: 'LIQUIDA', ColumnaOrigen: 'BELGICA', ColumnaPrecio: '89.95' },
  { ID: 9, ColumnaNombre: 'PRAZICUANTEL', ColumnaTipo: 'JARABE', ColumnaOrigen: 'CANADA', ColumnaPrecio: '40.32' },
  { ID: 10, ColumnaNombre: 'AMPICILINA', ColumnaTipo: 'INYECTADA', ColumnaOrigen: 'CHILE', ColumnaPrecio: '7.29' },
  { ID: 11, ColumnaNombre: 'MORFINA', ColumnaTipo: 'PASTILLA', ColumnaOrigen: 'COLOMBIA', ColumnaPrecio: '8.56' },
  { ID: 12, ColumnaNombre: 'PIRANTEL', ColumnaTipo: 'CAPSULA', ColumnaOrigen: 'REPUBLICA DOMINICANA', ColumnaPrecio: '65.41' },
  { ID: 13, ColumnaNombre: 'PROMETAZINA', ColumnaTipo: 'LIQUIDA', ColumnaOrigen: 'CHINA', ColumnaPrecio: '73.68' },
  { ID: 14, ColumnaNombre: 'IBOPRUFENO', ColumnaTipo: 'JARABE', ColumnaOrigen: 'JAPON', ColumnaPrecio: '43.74' },
  { ID: 15, ColumnaNombre: 'DEXAMETASONA', ColumnaTipo: 'INYECTADA', ColumnaOrigen: 'EL SALVADOR', ColumnaPrecio: '83.39' },
  { ID: 16, ColumnaNombre: 'EPINEFRINA', ColumnaTipo: 'PASTILLA', ColumnaOrigen: 'ESPAÑA', ColumnaPrecio: '98.29' },
  { ID: 17, ColumnaNombre: 'NALOXONA', ColumnaTipo: 'CAPSULA', ColumnaOrigen: 'HONDURAS', ColumnaPrecio: '35.19' },
  { ID: 18, ColumnaNombre: 'NITRITO DE SODIO', ColumnaTipo: 'LIQUIDA', ColumnaOrigen: 'MEXICO', ColumnaPrecio: '26.51' },
  { ID: 19, ColumnaNombre: 'PENICILINA', ColumnaTipo: 'JARABE', ColumnaOrigen: 'ESTADOS UNIDOS', ColumnaPrecio: '49.88' },
  { ID: 20, ColumnaNombre: 'PENICILAMINA', ColumnaTipo: 'INYECTADA', ColumnaOrigen: 'PORTUGAL', ColumnaPrecio: '15.40' },
];

@Component({
  selector: 'app-administrar-productos',
  templateUrl: './administrar-productos.component.html',
  styleUrls: ['./administrar-productos.component.css']
})
export class AdministrarProductosComponent implements OnInit {
  displayedColumns: string[] = ['ColumnaIDFE', 'ColumnaNombreFE', 'ColumnaTipoFE', 'ColumnaOrigenFE', 'ColumnaPrecioFE'];
  dataSource = new MatTableDataSource<ProductosObject>(ElementosTabla);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  NavegarHaciaSalir(){
    this.router.navigate(['/Principal'])
  }
}