const PRODUCTO = require('../models/producto');
const PRODUCTO_CTRL = {};

PRODUCTO_CTRL.getProducto = async (req, res) => {
    const producto = await PRODUCTO.find();
    res.json({"PRODUCTO": producto});
    //console.log({producto});
    //res.send('Hola mundo');
    // res.json({
    //     status: 'API funciona y los productos iran aqui'
    // });
};
PRODUCTO_CTRL.getUnProducto = async (req, res) => {
    const producto = await PRODUCTO.findById(req.params.id);
    //console.log(req.params.id);
    res.json(producto);
}

PRODUCTO_CTRL.createProducto = async (req, res) => {
    const producto = new PRODUCTO(req.body);
    await producto.save();
    //console.log(producto);
    res.json({
        'status': 'Producto guardado'
    });
};
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
PRODUCTO_CTRL.deleteProducto = async (req, res) => {
    await PRODUCTO.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto eliminado'});
};

module.exports = PRODUCTO_CTRL;