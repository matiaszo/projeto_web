const express = require('express');
const route = express.Router();

const home = require('./src/controllers/home');
const logIn = require('./src/controllers/log');
const cadastroUsuario = require('./src/controllers/userCad');
const userMain = require('./src/controllers/userMain');
const userVerReservas = require('./src/controllers/userVisualizarReservas')
const userReservar = require('./src/controllers/userReservar')

const admMain = require('./src/controllers/admMain')
const admChurrasqueira = require('./src/controllers/admChurrasqueira')
const admReserva = require('./src/controllers/admReserva')

route.get('/', home.getHome);

route.get('/logIn', logIn.getLogIn);
route.post('/login', logIn.postLogIn);

route.get('/userCadastro', cadastroUsuario.getUserCadastro);

route.get('/userPagPrincipal/:id', userMain.getUserMain);

route.get('/userVisualizarReservas/:id', userVerReservas.getUserVizualizarReservas);

route.get('/userReservar/:id', userReservar.getUserReservar);
route.post('/userReservar/:id', userReservar.postUserReservar);

route.get('/admPagPrincipal/:id', admMain.getAdmMain);
route.post('/admPagPrincipal/:id', admMain.postAdmMain);

route.get('/admChurrasqueiras/:id', admChurrasqueira.getAdmChurrasqueiras);
route.post('/admChurrasqueiras/:id', admChurrasqueira.postAdmChurrasqueira);

route.get('/admReservas/:id', admReserva.getAdmReserva)

module.exports = route;
