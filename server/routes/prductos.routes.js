const express = require('express');
const router = express.Router();

const prodcutoCtrl = require('../controllers/producto.controller');
router.get('/', prodcutoCtrl.getProducto);
router.post('/', prodcutoCtrl.createProducto);
//router.get('/:id', prodcutoCtrl.getProducto);
router.put('/:id', prodcutoCtrl.updateProducto);
router.delete('/:id', prodcutoCtrl.deleteProducto);

module.exports = router;