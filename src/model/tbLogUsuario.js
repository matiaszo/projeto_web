const Sequelize = require('sequelize');
const database = require('../config/db');

const logUsuario = database.define('LogUsuario',
    {
        IDLogUsuario: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        IDUsuario: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Nome: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        Sobrenome: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        Email: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        EDV: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Adm: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        Senha:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        Ativo: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        Acao: {
            type: Sequelize.STRING(100)
        }
    }
);

module.exports = logUsuario;
