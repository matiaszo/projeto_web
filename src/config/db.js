const sequelize = require('sequelize');
//configurações da base de dados
const database = new sequelize('projeto_web', 'projeto_web', '123',
{
    dialect: 'mssql', host:'localhost', port: 1433
});
database.sync();
module.exports = database;
