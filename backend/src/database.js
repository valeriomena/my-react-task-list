const env = require("dotenv");
env.config(); // debe ir en este orden
const mongoose = require('mongoose');

// cadena de conexion
const URI = process.env.URI_CONEXION
    ? process.env.URI_CONEXION
    : 'mongodb://localhost/dbtest';
const connection = mongoose.connect(URI);

connection.then(() => {
  console.log('La base de datos ha sido conectada');
}).catch(error => {
  console.error('Error al conectar con la base de datos:', error);
});

module.exports = connection;

