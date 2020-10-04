import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Producto } from '../../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  selectedProducto: Producto;
  TablaProducto: Producto[];
  readonly URL_API = 'http://localhost:3000/api/producto';

  constructor(private http: HttpClient) {
    this.selectedProducto = new Producto;
   }

  /* --- GET --- */
  getProducto() {
    return this.http.get(this.URL_API);
  }
  getUnProducto(_id: string) {
    return this.http.get(this.URL_API + `/${_id}`);
  }

  /* --- POST --- */
  createProducto(producto: Producto) {
    return this.http.post(this.URL_API, producto);
  }

  /* --- PUT --- */
  updateProducto(producto: Producto) {
    return this.http.put(this.URL_API + `/${producto._id}`, producto);
  }

  /* --- PUT --- */
  deleteProducto(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
