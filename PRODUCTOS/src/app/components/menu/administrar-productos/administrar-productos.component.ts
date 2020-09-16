import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface TablaData {
  id: string;
  ColumnaNombre: string;
  ColumnaTipo: string;
  ColumnaOrigen: string;
  ColumnaPrecio: string;
}

/** Constants used to fill up our data base. */
const L_ARRAY_NOMBRE: string[] = [
  'ASPIRINA', 'OMEPRAZOL', 'LEXOTIROXINA SODICA', 'RAMIPRIL', 'WARFARINA SODICA', 'SALBUTAMOL', 'PARACETAMOL', 'BENDROFLUMETIAZIDA',
  'MORFINA', 'PROMETAZINA', 'IBOPRUFENO', 'DEXAMETASONA', 'EPINEFRINA', 'NALOXONA', 'NITRITO DE SODIO', 'PENICILINA', 'PENICILAMINA',
  'PIRANTEL', 'PRAZICUANTEL', 'AMPICILINA'
]
const L_ARRAY_TIPO: string[] = [
  'PASTILLA', 'CAPSULA', 'LIQUIDA', 'JARABE', 'INYECTADA'
]
const L_ARRAY_PAIS: string[] = [
  'ALEMANIA', 'FRANCIA', 'BRASIL', 'ITALIA', 'COSTA RICA', 'ARGENTINA', 'GUATEMALA', 'BELGICA', 'CANADA', 'CHILE', 'COLOMBIA', 
  'REPUBLICA DOMINICANA', 'CHINA', 'JAPON', 'EL SALVADOR', 'ESPAÑA', 'HONDURAS', 'MEXICO', 'ESTADOS UNIDOS', 'PORTUGAL'
]
/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-administrar-productos',
  templateUrl: './administrar-productos.component.html',
  styleUrls: ['./administrar-productos.component.css']
})
export class AdministrarProductosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'ColumnaNombreFE', 'ColumnaTipoFE', 'ColumnaOrigenFE', 'ColumnaPrecioFE'];
  dataSource: MatTableDataSource<TablaData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router) { 
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  MetodoFiltrado(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
  }

  NavegarHaciaSalir(){
    this.router.navigate(['/Principal'])
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): TablaData {
  const Arreglonombre = L_ARRAY_NOMBRE[Math.round(Math.random() * (L_ARRAY_NOMBRE.length - 1))];
  const ArregloTipo = L_ARRAY_TIPO[Math.round(Math.random() * (L_ARRAY_TIPO.length - 1))];
  const ArregloOrigen = L_ARRAY_PAIS[Math.round(Math.random() * (L_ARRAY_PAIS.length - 1))];

  return {
    id: id.toString(),
    ColumnaNombre: Arreglonombre,
    ColumnaTipo: ArregloTipo,
    ColumnaOrigen: ArregloOrigen,
    ColumnaPrecio: Math.round(Math.random() * 1000).toString() + '.' + Math.round(Math.random() * 100).toString()
  };
}