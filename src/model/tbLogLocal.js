const Sequelize = require('sequelize');
const database = require('../config/db');

const logLocal = database.define('LogLocal',
    {
        IDLogLocal: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        IDLocal: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Nome: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        Capacidade: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Acao: {
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }
);

module.exports = logLocal;
