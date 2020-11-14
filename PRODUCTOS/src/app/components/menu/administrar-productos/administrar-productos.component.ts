import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NgForm, Form } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

import {Producto} from '../../../models/producto'
import {ProductoService} from '../../../services/services/producto.service'
import { formatCurrency } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-administrar-productos',
  templateUrl: './administrar-productos.component.html',
  styleUrls: ['./administrar-productos.component.css']
})
export class AdministrarProductosComponent implements OnInit {
  selectedProducto: Producto = new Producto();
  displayedColumns: string[] = ['ColumnaIDFE', 'ColumnaNombreFE', 'ColumnaTipoFE', 'ColumnaOrigenFE', 'ColumnaPrecioFE', 'ColumnaAccionFE'];
  dataSource = new MatTableDataSource<Producto>(); //Producto: ../models/producto y ElementoTabla: Arreglo
  isEditing = false;
  step = 0;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(public productoService: ProductoService, private router: Router, private _snackBar: MatSnackBar, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.getProducto();
    } else {
      this.router.navigate(['/Login']);
    }
  }

  /**
   * @name addProducto(form)
   * @description
   *  Agregar producto a la base de datos de mongoodb
   * @param {Form} form 
   * @returns Producto guardado
   */
  addProducto(form: NgForm) {
    this.productoService.createProducto(form.value)
      .subscribe(res => {
        console.log(res);
        this.LimpiarForm(form);
        this._snackBar.open('Producto guardado.', 'Aceptar', {
          duration: 2000,
        });
        this.getProducto();
      });
  }

  /**
   * @name LimpiarForm(form)
   * @description
   *  Limpiar el formulario, es decir limpiar todos los imputs en la pantalla
   * @param {Form} form
   */
  LimpiarForm(form?: NgForm) {
    if (form){
      form.reset();
      this.productoService.selectedProducto = new Producto();
    }
  }

  /**
   * @name getProducto()
   * @description
   *  Toma un producto y lo muestra en la pantalla si se desea detallar uno en especifico
   * @requires Producto
   */
  getProducto() {
    this.productoService.getProducto()
      .subscribe(res => {
        this.productoService.TablaProducto = res as Producto[];
        console.log(res);
      });
  }

  /**
   * @name selectProducto(producto)
   * @description
   *  Muestra todos los productos que se encuentran en base de datos
   * @param {Object} producto
   */
  selectProducto(producto: Producto) {
    this.productoService.selectedProducto = producto;
    this.isEditing = true;
  }

  /**
   * @name updateProducto(form)
   * @description
   *  Actualiza un producto en especifico
   * @param {Form} form 
   */
  updateProducto(form: NgForm) {
    this.productoService.updateProducto(form.value)
      .subscribe(res => {
        console.log(res);
        this.LimpiarForm(form);
        this._snackBar.open('Producto actualizado.', 'Aceptar', {
          duration: 2000,
        });
        this.getProducto();
      });
    this.isEditing = false;
  }

  /**
   * @name deleteProducto(_id)
   * @description
   *  Eliminar un producto
   * @param {String} _id
   * @returns Producto eliminado
   * @example deleteProducto(a53sd1f85e41asdf166a5e4fasd3f21)
   */
  deleteProducto(_id: string) {
    if(confirm('Esta seguro que desea eliminar?')) {  
      this.productoService.deleteProducto(_id)
        .subscribe(res => {
          console.log(res);
          this._snackBar.open('Producto eliminado.', 'Aceptar', {
            duration: 2000,
          });
          this.getProducto();
        });
    }
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

  setStep(index: number) {
    this.step = index;
  }
}