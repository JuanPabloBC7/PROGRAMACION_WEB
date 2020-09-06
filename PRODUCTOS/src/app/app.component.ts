import { Component } from '@angular/core';
import { Class_Producto } from './Models/Producto/Producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tituloAngJPB = 'Mi primera pagina en Angular';
  
  productoArreglo: Class_Producto[] = [
    { ID: 1, Nombre: "Sentry", Descripcion: "Tabletas", Laboratorio: "BAYER", Origen: "Extranjero", Fecha_Vencimiento: "06/06/2020", Vigente: true, Precio: 25 },
    { ID: 2, Nombre: "Klein", Descripcion: "Gotas", Laboratorio: "BAYER", Origen: "Nacional", Fecha_Vencimiento: "06/09/2020", Vigente: true, Precio: 50 },
    { ID: 1, Nombre: "Sentry", Descripcion: "Tabletas", Laboratorio: "BAYER", Origen: "Extranjero", Fecha_Vencimiento: "06/06/2020", Vigente: true, Precio: 25 }
  ];

  selectedProducto: Class_Producto = new Class_Producto();

  btn_AgregarOEditar_Click(){
    if(this.selectedProducto.ID === 0){
      this.selectedProducto.ID = this.productoArreglo.length + 1;
      this.productoArreglo.push(this.selectedProducto);
    }    
    this.selectedProducto = new Class_Producto();
  }

  tbl_Editar_Click(Producto: Class_Producto){
    this.selectedProducto = Producto;
  }

  btn_Eliminar_Click(){
    if(confirm('Seguro de querer eliminarlo?')){
      this.productoArreglo = this.productoArreglo.filter(X => X != this.selectedProducto);
      this.selectedProducto = new Class_Producto();
    }
  }
}
