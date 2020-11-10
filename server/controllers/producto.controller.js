const PRODUCTO = require('../models/producto');
const PRODUCTO_CTRL = {};

/**
 * @name GET_PRODUCTO
 * @description
 *  Devuelve todos los productos de forma masiva que se encuentren en la base de datos.
 * @param {String} req Request primer parametro de peticion
 * @param {String} res Response segundo parametro de respuesta
 * @example
 *  PRODUCTO.find() se encarga de obtener todos los datos.
 */
PRODUCTO_CTRL.getProducto = async (req, res) => {
    const producto = await PRODUCTO.find();
    res.json(producto);
    //console.log({producto});
};

/**
 * @name GET_UN_PRODUCTO
 * @description
 *  Devuelve un producto en especifico obteniendo como parametro el ID.
 * @param {String} req 
 * @param {String} res 
 * @param {String} req.params.id ID del producto.
 * @example
 *  PRODUCTO.findById("123asdf65416c5asdf16ca15sd5f1asd2c")
 */
PRODUCTO_CTRL.getUnProducto = async (req, res) => {
    const producto = await PRODUCTO.findById(req.params.id);
    //console.log(req.params.id);
    res.json(producto);
}

/**
 * @name CREATE_PRODUCTO
 * @description
 *  Crea un producto nuevo.
 * @param {String} req 
 * @param {String} res 
 * @param {String} req.params.id ID del producto.
 * @param {string} req.body.NOMBRE Nombre del producto
 * @param {string} req.body.TIPO Tipo de producto
 * @param {string} req.body.ORIGEN Origen del producto
 * @param {string} req.body.PRECIO Precio del producto
 * @example
 *  NOMBRE: PARACETAMOL
 *  TIPO: CAPSULA
 *  ORIGEN: GUATEMALA
 *  PRECIO: 81.42
 */
PRODUCTO_CTRL.createProducto = async (req, res) => {
    const producto = new PRODUCTO({
        NOMBRE: req.body.NOMBRE,
        TIPO: req.body.TIPO,
        ORIGEN: req.body.ORIGEN,
        PRECIO: req.body.PRECIO
    });
    await producto.save();
    //console.log(producto);
    res.json({
        'status': 'Producto guardado'
    });
};

/**
 * @name UPDATE_PRODUCTO
 * @description
 *  Actualiza un producto mediante su ID.
 * @param {String} req 
 * @param {String} res 
 * @param {String} req.params.id ID del producto.
 * @param {string} req.body.NOMBRE Nombre del producto
 * @param {string} req.body.TIPO Tipo de producto
 * @param {string} req.body.ORIGEN Origen del producto
 * @param {string} req.body.PRECIO Precio del producto
 * @example
 *  PRODUCTO.findByIdAndUpdate(id, {$set: producto}, {new: true})
 *  NOMBRE: PARACETAMOL
 *  TIPO: CAPSULA
 *  ORIGEN: GUATEMALA
 *  PRECIO: 81.42
 */
PRODUCTO_CTRL.updateProducto = async (req, res) => {
    const { id } = req.params;
    const producto = {
        NOMBRE:      req.body.NOMBRE,
        TIPO:        req.body.TIPO,   
        ORIGEN:      req.body.ORIGEN,
        PRECIO:      req.body.PRECIO
    }
    await PRODUCTO.findByIdAndUpdate(id, {$set: producto}, {new: true});
    res.json({status: 'Producto actualizado'});
    //console.log(producto);
};

/**
 * @name DELETE_PRODUCTO
 * @description
 *  Elimina un producto mediante su ID.
 * @param {String} req 
 * @param {String} res 
 * @param {String} req.params.id ID del producto.
 * @example
 *  PRODUCTO.findByIdAndRemove("123asdf65416c5asdf16ca15sd5f1asd2c")
 */
PRODUCTO_CTRL.deleteProducto = async (req, res) => {
    await PRODUCTO.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto eliminado'});
};

module.exports = PRODUCTO_CTRL;