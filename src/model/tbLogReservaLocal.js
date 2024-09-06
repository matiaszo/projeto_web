const Sequelize = require('sequelize');
const database = require('../config/db');

const logReservaLocal = database.define('LogReservaLocal',
    {
        IDLogReservaLocal: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        IDUsuario: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        IDLocal: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        IDReservaLocal: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Data: {
            type: Sequelize.DATE,
            allowNull: false
        },
        Acao: {
            type: Sequelize.STRING(100)
        }
    }

);

module.exports = logReservaLocal;