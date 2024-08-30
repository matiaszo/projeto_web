const Sequelize = require('sequelize');
const database = require('../config/db');
const reservaLocal = require('./tb_reserva_local');

const logReservaLocal = database.define('logReservaLocal',
    {
        IDLog: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        Tipo: {
            type: Sequelize.STRING(50),
            allowNull: false
        },

        ValorAntigo: {
            type: Sequelize.STRING(50),
            allowNull: false
        },

        ValorNovo: {
            type: Sequelize.STRING(50),
            allowNull: true
        },

        Data: {
            type: Date.now(),
            allowNull: false
        }
    }

);

reserva.belongsTo(reservaLocal, {
    constraint: true,
    foreignKey: 'IDReserva'
});

module.exports = logReservaLocal;