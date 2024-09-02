const express = require('express');
const route = express.Router();

const home = require('./src/controllers/home');
const logIn = require('./src/controllers/log');
const cadastro_usuario = require('./src/controllers/userCad');


route.get('/', home.getHome);
// route.post('/home', logIn.postUserCad);


route.get('/logIn', logIn.getLogIn);
// route.post('/login', logIn.postLogIn);
// console.log(456);

route.get('/userCadastro', cadastro_usuario.getUserCadastro);
route.post('/userCadastro', cadastro_usuario.postUserCadastro)


module.exports = route;
