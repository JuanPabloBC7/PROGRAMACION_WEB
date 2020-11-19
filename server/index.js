"use strict";
const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = 'mongodb+srv://JPBALAN:L%21977h7%25B%24Gk9du@cluster-productos.jhj3n.mongodb.net/FARMACIA?retryWrites=true&w=majority'; // or Atlas connection string
var ObjectId = require('mongodb').ObjectID;
let cachedDb = null;

function connectToDatabase(uri) {
    console.log('=> connect to database');
    if (cachedDb) {
        console.log('=> using cached database instance');
        return Promise.resolve(cachedDb);
    }
    return MongoClient.connect(uri)
        .then(db => {
            cachedDb = db; //For mongo client before v3
            cachedDb = db.db("FARMACIA"); //For mongo client v3,item is db i creted
            return cachedDb;
        });
}

function getProducto(db) {
    console.log('=> query database');
    return db.collection('PRODUCTO').find({}).toArray()
        .then((data) => {
            return ({
                statusCode: 200,
                body: 'Todos los productos obtenidos correctamente',
                data: data
            });
        })
        .catch(err => {
            console.log('=> an error occurred: ', err);
            return {
                statusCode: 500,
                body: 'error al obtener todos los productos'
            };
        });
}
function getUnProducto(db, idProducto) {
    console.log('=> query database');
    return db.collection("PRODUCTO").find({ "_id": ObjectId(idProducto) }).toArray()
        .then((data) => {
            return ({
                statusCode: 200,
                body: 'Un producto obtenido correctamente ' + idProducto,
                data: data
            });
        })
        .catch(err => {
            console.log('=> an error occurred: ', err);
            return {
                statusCode: 500,
                body: 'error al obtener un producto'
            };
        });
}
function createProducto(db, Producto) {
    console.log('=> query database');
    return db.collection("PRODUCTO").insertOne(
        {
            "NOMBRE": Producto.NOMBRE, 
            "TIPO": Producto.TIPO,
            "ORIGEN": Producto.ORIGEN,
            "PRECIO": Producto.PRECIO,
        })
        .then((data) => {
            return ({
                statusCode: 200,
                body: 'Producto creado correctamente',
                data: data
            });
        })
        .catch(err => {
            console.log('=> an error occurred: ', err);
            return {
                statusCode: 500,
                body: 'error al obtener un producto'
            };
        });
}
function updateProducto(db, idProducto, Producto) {
    console.log('=> query database');
    const filter = {"_id": ObjectId(idProducto)}
    const updateDocument = {
                                $set: 
                                {
                                    "NOMBRE": Producto.NOMBRE, 
                                    "TIPO": Producto.TIPO,
                                    "ORIGEN": Producto.ORIGEN,
                                    "PRECIO": Producto.PRECIO
                                },
                            };
    return db.collection("PRODUCTO").updateOne(filter, updateDocument)
        .then((data) => {
            return ({
                statusCode: 200,
                body: 'Producto actualizado correctamente',
                data: data
            });
        })
        .catch(err => {
            console.log('=> an error occurred: ', err);
            return {
                statusCode: 500,
                body: 'error al obtener un producto'
            };
        });
}
function deleteProducto(db, idProducto)
{
  console.log('=> query database');
  return db.collection('PRODUCTO').deleteOne(
      { 
          "_id": ObjectId(idProducto)
      })
      .then((data) => {
          return ({
                statusCode: 200,
                body: 'Producto eliminado correctamente, eliminados ' + data.deletedCount,
                data: data
            });
        })
        .catch(err => {
            console.log('=> an error occurred: ', err);
            return {
                statusCode: 500,
                body: 'error al eliminar un producto'
            };
        });
}

module.exports.handler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    console.log('event: ', event);
    if (event.tipoMetodo == 'GET') {
        connectToDatabase(MONGODB_URI)
            .then(db => getProducto(db))
            .then(result => {
                console.log('=> returning result: ', result);
                callback(null, result);
            })
            .catch(err => {
                console.log('=> an error occurred: ', err);
                callback(err);
            });   
    }
    else if (event.tipoMetodo == 'GETuno')
    {
        connectToDatabase(MONGODB_URI)
            .then(db => getUnProducto(db, event.idProducto))
            .then(result => {
                console.log('=> returning result: ', result);
                callback(null, result);
            })
            .catch(err => {
                console.log('=> an error occurred: ', err);
                callback(err);
            }); 
    }
    else if (event.tipoMetodo == 'CREATE')
    {
        connectToDatabase(MONGODB_URI)
            .then(db => createProducto(db, event.Producto))
            .then(result => {
                console.log('=> returning result: ', result);
                callback(null, result);
            })
            .catch(err => {
                console.log('=> an error occurred: ', err);
                callback(err);
            }); 
    }
    else if (event.tipoMetodo == 'UPDATE')
    {
        connectToDatabase(MONGODB_URI)
            .then(db => updateProducto(db, event.idProducto, event.Producto))
            .then(result => {
                console.log('=> returning result: ', result);
                callback(null, result);
            })
            .catch(err => {
                console.log('=> an error occurred: ', err);
                callback(err);
            }); 
    }
     else if (event.tipoMetodo == 'DELETE')
    {
        connectToDatabase(MONGODB_URI)
            .then(db => deleteProducto(db, event.idProducto))
            .then(result => {
                console.log('=> returning result: ', result);
                callback(null, result);
            })
            .catch(err => {
                console.log('=> an error occurred: ', err);
                callback(err);
            }); 
    }
    else 
    {
        console.log('Error seleccionaste un metodo inexistente');
        callback(null, 'Error seleccionaste un metodo inexistente');
    }
};