export class Producto {
    
    constructor(_id = '', nombre = '', tipo = '', origen = '', precio = '') {
        this._id = _id;
        this.NOMBRE = nombre;
        this.TIPO = tipo;
        this.ORIGEN = origen;
        this.PRECIO = precio;
    }

    _id: string;
    NOMBRE: string;
    TIPO: string;
    ORIGEN: string;
    PRECIO: string;
}
