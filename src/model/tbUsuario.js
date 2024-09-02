const Sequelize = require('sequelize');
const database = require('../config/db');

const usuario = database.define('Usuario',
    {
        IDUsuario: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
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
        }
    }
);

module.exports = usuario;
