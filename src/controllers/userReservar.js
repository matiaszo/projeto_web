const usuario = require('../model/tbUsuario')
const locais = require('../model/tbLocal')
const reservas = require('../model/tbReservaLocal')
const logReservas = require('../model/tbLogReservaLocal')

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
            attributes: ['IDLocal', 'Nome', 'Capacidade']
        })
        res.render('../views/userReservar', {reserva, user, local});
    },

    async postUserReservar(req, res){
        data = req.body

        await reservas.create({
            Data: body.data,
            Ativo: true,
            IDUsuario: 
        })

    }
}