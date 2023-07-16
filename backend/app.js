const express = require('express');
const cors = require('cors');
const app = express();

//configuration 
app.set('port', process.env.PORT || 4000);

//middlewares
app.use.apply(cors())
app.use(express.json())
//rutas
app.get('/', (req, res)=> {
    res.send('Bienvenidoami api rest full');
})
//
app.use('/api/users', require('./src/routers/usuario'))
module.exports = app;