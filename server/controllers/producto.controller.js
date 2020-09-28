const PRODUCTO_CTRL = {};

PRODUCTO_CTRL.getProducto = (req, res) => {
    //res.send('Hola mundo');
    res.json({
        status: 'API funciona y los productos iran aqui'
    });
}

PRODUCTO_CTRL.createProducto = function(){}
PRODUCTO_CTRL.updateProducto = function(){}
PRODUCTO_CTRL.deleteProducto = function(){}

module.exports = PRODUCTO_CTRL;