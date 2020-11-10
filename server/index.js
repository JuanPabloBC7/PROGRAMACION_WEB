const express = require('express'); //implementación de express llamandolo con una variable express
const morgan = require('morgan'); 
const cors = require('cors');
const app = express();  //utilizacion de express por medio de la variable app
const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);  //creando una variable app "port" con el puerto que ofrezca el servido o el puerto 3000

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/producto', require('./routes/productos.routes'));

//Strarting the server
app.listen(app.get('port'), () => {    //metodo que levanta o escucha al server en el puerto 3000 e imprimir un mensaje en consola
    console.log('Server on http://localhost:'+app.get('port')+'/')
});