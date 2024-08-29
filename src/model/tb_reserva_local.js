const Sequelize = require('sequelize');
const database = require('../config/db');
const local = require('../model/tb_local');
const usuario = require('../model/tb_usuario');

const reserva = database.define('ReservaLocal',
    {
        IDReservaLocal: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Data: {
            type:Sequelize.DATEONLY,
            allowNull: false
        }
    }
);
reserva.belongsTo(local, {
    constraint: true,
    foreignKey: 'IDLocal'
});
reserva.belongsTo(usuario, {
    constraint: true,
    foreignKey: 'IDUsuario'
});

module.exports = reserva; 