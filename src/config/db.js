const sequelize = require('sequelize');
//configurações da base de dados
const database = new sequelize('projeto_web', 'usuario', '123',
{
    dialect: 'mssql', host:'localhost', port: 53993
});
database.sync();
module.exports = database;
