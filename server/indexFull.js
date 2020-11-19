const express = require('express'); // Express para escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
const morgan = require('morgan'); // Es un middleware para la captura de solicitudes HTTP para Node. js para su posterior registro y seguimiento.
const cors = require('cors'); // Mecanismo que utiliza cabeceras HTTP adicionales para permitir que un user agent obtenga permiso para acceder a recursos seleccionados desde un servidor, en un origen distinto (dominio) al que pertenece.
const app = express(); // Utilizacion de express por medio de la variable app
const { mongoose } = require('./database');

// var redis = require("redis");
// var client = redis.createClient();
// client.on("error", function(error) {
//     console.error(error);
// });
// client.on('connect', function() {
//     console.log('connected with redis...');
// });
// //client.set('framework', 'AngularJS');
// //client.set(['framework', 'AngularJS']);
// client.set("key", "value", redis.print);
// client.set('framework', 'AngularJS', function(err, reply) {
//     console.log(reply);
// });
// //client.get("framework", redis.print);
// client.get('framework', function(err, reply) {
//     console.log(reply);
// });

// //client.hmset('frameworks', 'javascript', 'AngularJS', 'css', 'Angular Material UI', 'node', 'Express');
// client.hmset('frameworks', {
//     'javascript': 'AngularJS',
//     'css': 'Angular Material UI',
//     'node': 'Express'
// });

// client.hgetall('frameworks', function(err, object) {
//     console.log(object);
// });


// client.rpush(['frameworks', 'angularjs', 'backbone'], function(err, reply) {
//     console.log(reply); //prints 2
// });

// client.lrange('frameworks', 0, -1, function(err, reply) {
//     console.log(reply); // ['angularjs', 'backbone']
// });

// client.sadd(['tags', 'angularjs', 'backbonejs', 'emberjs'], function(err, reply) {
//     console.log(reply); // 3
// });

// Settings
app.set('port', process.env.PORT || 3000);  // Creando una variable app "port" con el puerto que ofrezca el servido o el puerto 3000

//Middlewares npm run dev
/** 
 * @name RUN_APP
 * @description
 *  Nombre que toma mi servicio para ejecutarse
 *  Para realizar esta accion dirigirse mi server/package.json y colocar dev en "dev": "nodemon server/index.js"
*/
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/producto', require('./routes/productos.routes'));  // Ruta principal

//Strarting the server
/**
 * @name LISTEN_SERVER
 * @description 
 *  Metodo que levanta o escucha al server en el puerto 3000 o asignado e imprimir un mensaje en consola.
 * @param {String} port 
 *  Variable que contiene el puerto en donde se estara escuchando mi servicio.
 */
app.listen(app.get('port'), () => {
    console.log('Server on http://localhost:'+app.get('port')+'/')
});