const mongoose = require('mongoose');
const { Schema } = mongoose

/**
 * @name MODEL_SERVER
 * @description
 *  Modelo de mi tabla principal.
 */
const PRODUCTO_SCHEMA = new Schema ({
    NOMBRE:      { type: String, required: true },
    TIPO:        { type: String, required: true },   
    ORIGEN:      { type: String, required: true },
    PRECIO:      { type: String, required: true }
})

module.exports = mongoose.model('PRODUCTO', PRODUCTO_SCHEMA);