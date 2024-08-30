const Sequelize = require('sequelize');
const database = require('../config/db');
const reservaLocal = require('./tb_reserva_local');

const logCancelarReservaLocal = database.define('logCancelarReservaLocal',
    {
        IDLog: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        Motivo: {
            type: Sequelize.STRING(150),
            allowNull: false
        },

        DataCancelamento: {
            type: Date.now(),
            allowNull: true
        }
    }

);

reserva.belongsTo(reservaLocal, {
    constraint: true,
    foreignKey: 'IDReserva'
});

module.exports = logCancelarReservaLocal;