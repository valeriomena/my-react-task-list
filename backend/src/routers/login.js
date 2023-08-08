// ./routers/login.js
const express = require('express');
const routerLogin = express.Router();

// Importa los controladores o lógica necesaria para el login
const { handleLogin } = require('../controller/loginController')

// Ruta para manejar el inicio de sesión
routerLogin.post('/', handleLogin);

module.exports = routerLogin;
