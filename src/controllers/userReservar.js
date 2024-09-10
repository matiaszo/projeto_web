const usuario = require('../model/tbUsuario')
const locais = require('../model/tbLocal')
const reservas = require('../model/tbReservaLocal')
const logReservas = require('../model/tbLogReservaLocal')
const { raw } = require('express')
const { where } = require('sequelize')

module.exports = {
    async getUserReservar(req, res){
        data = req.params.id

        const user = await usuario.findAll({
            raw: true,
            attributes: ['EDV', 'Senha', 'Nome', 'IDUsuario'],
            where: {IDUsuario: data}
        })

        const reserva = await reservas.findAll({
            raw: true,
            attributes: ['IDReservaLocal', 'Data', 'IDLocal'],
            where: {IDUsuario: data}
        })

        const local = await locais.findAll({
            raw: true,
            attributes: ['IDLocal', 'Nome', 'Capacidade'],
        })

        res.render('../views/userReservar', {reserva, user, local});
    },

    async postUserReservar(req, res){
        data = req.body
        userId = req.params.id

        const local = await locais.findAll({
            raw: true,
            attributes: ['IDLocal']
        })

        const reserva = await reservas.create({
            Data: data.dia,
            IDUsuario: userId,
            IDLocal: req.body.local[0]
        })

        const user = await usuario.findAll({
            raw: true,
            attributes: ['EDV', 'Senha', 'Nome', 'IDUsuario'],
            where: {IDUsuario: userId}
        })

        res.render('../views/userPagPrincipal', {user, reserva});
    }
}