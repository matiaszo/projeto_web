const Sequelize = require('sequelize');
const database = require('../config/db');

const local = database.define('Local',
    {
        IDLocal: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Nome: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        Capacidade: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Ativo: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    }
);
module.exports = local;
