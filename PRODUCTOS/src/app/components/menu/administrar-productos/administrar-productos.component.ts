import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Producto} from '../../../models/producto'

@Component({
  selector: 'app-administrar-productos',
  templateUrl: './administrar-productos.component.html',
  styleUrls: ['./administrar-productos.component.css']
})
export class AdministrarProductosComponent implements OnInit {
  displayedColumns: string[] = ['ColumnaIDFE', 'ColumnaNombreFE', 'ColumnaTipoFE', 'ColumnaOrigenFE', 'ColumnaPrecioFE', 'ColumnaAccionFE'];
  dataSource = new MatTableDataSource<Producto>(ElementosTabla); //Producto: ../models/producto y ElementoTabla: Arreglo

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  NavegarHaciaSalir(){
    this.router.navigate(['/Principal'])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
  

  selectedProducto: Producto = new Producto();

  btn_AgregarProducto_Click(){
    if(this.selectedProducto.ID === 0){
      this.selectedProducto.ID = this.displayedColumns.length + 1;
      // this.displayedColumns.push((this.selectedProducto));
    }    
    this.selectedProducto = new Producto();
  }

  tbl_Editar_Click(Producto: Producto){
    this.selectedProducto = Producto;
  }

  // btn_Eliminar_Click(){
  //   if(confirm('Seguro de querer eliminarlo?')){
  //     this.dataSource = this.dataSource.filter(X => X != this.dataSource);
  //     this.selectedProducto = new ProductosObject();
  //   }
  // }
}

const ElementosTabla: Producto[] = [
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