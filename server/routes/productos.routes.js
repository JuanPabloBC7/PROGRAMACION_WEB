const express = require('express');
const router = express.Router();

/**
 * @name ROUTES_SERVER
 * @description
 *  Rutas que utilizare en mi front-end indicando cuales necesitan un ID y cuales no, los metodos consumidos se encuentran en
 *  server/controllers/producto.controller.js.
 */
const prodcutoCtrl = require('../controllers/producto.controller');
router.get('/', prodcutoCtrl.getProducto);
router.post('/', prodcutoCtrl.createProducto);
router.get('/:id', prodcutoCtrl.getUnProducto);
router.put('/:id', prodcutoCtrl.updateProducto);
router.delete('/:id', prodcutoCtrl.deleteProducto);

module.exports = router;