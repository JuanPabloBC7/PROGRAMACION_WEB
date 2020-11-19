const redis = require('redis');
const PRODUCTO = require('../models/producto');
const PRODUCTO_CTRL = {};

// create and connect redis client to local instance.
var client = redis.createClient(6379, '35.182.86.49');
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
    //console.log({producto});
    try {
        /*const contacts = await contactDao.getAll();*/
        // key to store results in Redis store
        const productosRedisKey = 'productosKey';
        // Try fetching the result from Redis first in case we have it cached
        return client.get(productosRedisKey, async (err, productos) => {
            // If that key exists in Redis store
            if (productos) {
                //console.log("Encontro en REDIS");
                return res.status(200).json(JSON.parse(productos));
            }
            else{
    const producto = await PRODUCTO.find();
                // Save the  API response in Redis store,  data expire time in 3600 seconds, it means one hour
                client.setex(productosRedisKey, 30, JSON.stringify(producto));
                return res.status(200).json(producto);
            }
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message,
        });
    }
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