const express = require('express'); //implementación de express llamandolo con una variable express
const app = express();  //utilizacion de express por medio de la variable app

// Settings
app.set('port', process.env.PORT || 3000);  //creando una variable app "port" con el puerto que ofrezca el servido o el puerto 3000


//Mideelewares

//Routes

//Strarting the server
app.listen(app.get('port'), () => {    //metodo que levanta o escucha al server en el puerto 3000 e imprimir un mensaje en consola
    console.log('Server on http://localhost:'+app.get('port')+'/')
});