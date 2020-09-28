const mongoose = require('mongoose');
const { Schema } = mongoose

const PRODUCTO_SCHEMA = new Schema ({
    NOMBRE:      { type: String, required: true },
    TIPO:        { type: String, required: true },   
    ORIGEN:      { type: String, required: true },
    PRECIO:      { type: String, required: true },
    DESCRIPCION: { type: String, required: false }
})

const USUARIO_SCHEMA = new Schema ({
    USUARIO:    { type: String, required: true },
    CONTRASENA: { type: String, required: true }
})

module.exports = mongoose.model('PRODUCTO', PRODUCTO_SCHEMA);
module.exports = mongoose.model('USUARIO', USUARIO_SCHEMA);