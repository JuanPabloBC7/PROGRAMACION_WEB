import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  /**
   * @name selectedProducto
   * @type Object
   * @description
   *  Objeto de productos con todos sus atributos.
   * @name TablaProducto
   * @type Array
   * @description
   *  Arreglo de productos para realizar distintas acciones.
   */
  selectedProducto: Producto;
  TablaProducto: Producto[];
  readonly URL_API = 'https://h2kcca2yb6.execute-api.us-east-2.amazonaws.com/apiProductos/productos';

  constructor(private http: HttpClient) {
    this.selectedProducto = new Producto;
   }

  /* --- GET --- */
  /**
   * @name getProducto()
   * @description
   *  Obtiene los datos de todos los productos almacenados en base, 
   *  metodo se encuentra en server/controllers/producto.controllers.js.
   * @returns Retorna toda la información.
   */
  getProducto() {
    return this.http.get(this.URL_API);
  }

  /**
   * @name getUnProducto(_id)
   * @description
   *  Devuelve la información de un producto en específico, al indicar su ID, 
   *  metodo se encuentra en server/controllers/producto.controllers.js.
   * @param {String} _id ID de un producto en específico
   * @returns Objeto de tipo producto.
   * @example getUnProducto("as6d5f4a89sc4as6er1fa89sd4asdfc2asdf")
   */
  getUnProducto(_id: string) {
    return this.http.patch(this.URL_API, 
      {
        "tipoMetodo": "GETuno",
        "idProducto": `${_id}`
      });
  }

  /* --- POST --- */
  /**
   * @name createProducto(producto)
   * @description
   *  Metodo que se encarga de guardar los productos nuevos
   * @param {Object} producto Parametro de tipo objeto, con caracteristicas del producto
   * @returns Objeto del producto completo
   * @example createProducto(producto{NOMBRE, TIPO, ORIGEN, PRECIO})
   */
  createProducto(producto: Producto) {
    return this.http.patch(this.URL_API,
      { 
        "tipoMetodo": "CREATE",
        "Producto": producto
    });
  }

  /* --- PUT --- */
  /**
   * @name updateProducto(producto)
   * @description
   *  Metodo que se encarga de actualizar los datos de un producto
   * @param {Object} producto Parametro de tipo objeto, con caracteristicas del producto
   * @returns Objeto del producto actualizado completo
   * @example updateProducto(producto{NOMBRE, TIPO, ORIGEN, PRECIO})
   */
  updateProducto(producto: Producto) {
    return this.http.patch(this.URL_API,
      {
        "tipoMetodo": "UPDATE",
        "idProducto": `${producto._id}`,
        "Producto": producto
      });
  }

  /* --- PUT --- */
  /**
   * @name updateProducto(producto)
   * @description
   *  Metodo que se encarga de eliminar un producto
   * @param {String} _id ID del producto que identifica el objeto a eliminar
   * @returns Vacio para el caso eliminado
   * @example deleteProducto(65asdf4a89s4df4a6s5df41981as1df1s56daf1)
   */
  deleteProducto(_id: string) {
    return this.http.patch(this.URL_API, 
      {
        "tipoMetodo": "DELETE",
        "idProducto": `${_id}`
      });
  }
}
