const express = require('express');
const route = express.Router();

const home = require('./src/controllers/home');
const logIn = require('./src/controllers/log');
const cadastro_usuario = require('./src/controllers/userCad');
const user_main = require('./src/controllers/userMain');
const user_ver_reservas = require('./src/controllers/userVisualizarReservas')
const user_reservar = require('./src/controllers/userReservar')


route.get('/', home.getHome);
// route.post('/home', logIn.postUserCad);


route.get('/logIn', logIn.getLogIn);
route.post('/login', logIn.postLogIn);

// console.log(456);

route.get('/userCadastro', cadastro_usuario.getUserCadastro);
// route.post('/userCadastro', cadastro_usuario.postUserCadastro)

route.get('/userPagPrincipal/:id', user_main.getUserMain);

route.get('/userVisualizarReservas/:id', user_ver_reservas.getUserVizualizarReservas)


route.get('/userReservar/:id', user_reservar.getUserReservar)
route.post('/userReservar/:id', user_reservar.postUserReservar)

module.exports = route;
