const mongoose = require('mongoose');

const URI = 'mongodb://localhost/FARMACIA';

/**
 * @name DATABASE_CONNECTION
 * @description 
 *  Metodo de mongodb que se encarga de retornar un mensaje indicando que si se efectuo la conexion a la base de datos de 
 *  forma correcta.
 * @param {String} URI Path de la base de datos a la que se debe conectar
 * @returns Retorna un mensaje indicando que la base de datos se conecto efectivamente indicando la URI correspondiente.
 *  Retorna el error del catch al no efectuarse la conexion correctamente.
 * @example mongoose.connect("http://localhost/FARMACIA")
 */
mongoose.connect(URI)
    .then(db => {
        console.log('DB esta conectada ' + URI);
        
    })
    .catch(err => console.error(err));

/** 
 * @name MODULE_EXPORTS
 * @description 
 *  Exporta miconexion de base de datos para ser manipulada en mi front-end en donde se necesite
 * @example module.exports = mongoose;.
 */    
module.exports = mongoose;