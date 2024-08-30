const Sequelize = require('sequelize');
const database = require('../config/db');
const local = require('./tbLocal');
const usuario = require('./tbUsuario');

const reservaLocal = database.define('ReservaLocal',
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
        },
        Ativo: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    }
);
reservaLocal.belongsTo(usuario, {
    constraint: true,
    foreignKey: 'IDUsuario'
});
reservaLocal.belongsTo(local, {
    constraint: true,
    foreignKey: 'IDLocal'
});

module.exports = reservaLocal; 
