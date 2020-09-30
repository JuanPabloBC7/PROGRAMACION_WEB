const express = require('express');
const router = express.Router();

const prodcutoCtrl = require('../controllers/producto.controller');
router.get('/', prodcutoCtrl.getProducto);
// router.get('/', (req, res) => {
//     res.json({status: 'Api works'})
// }
// );
router.post('/', prodcutoCtrl.createProducto);
router.get('/:id', prodcutoCtrl.getUnProducto);
router.put('/:id', prodcutoCtrl.updateProducto);
router.delete('/:id', prodcutoCtrl.deleteProducto);

module.exports = router;