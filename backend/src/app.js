const express = require('express')
const cors = require('cors')
const app = express()

//configuration 
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(cors())
app.use(express.json())
//rutas
app.get('/', (req, res)=> {
    res.send('Api de Tareas');
})
//ruta para nuestra api de usurios
app.use('/api/users', require('./routers/usuario'))
//ruta para nuestra api de tareas
app.use('/api/task', require('./routers/taskRouter'))
//ruta para el login
app.use('/api/login', require('./routers/login'));
module.exports = app;