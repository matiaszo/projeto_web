const usuario = require('../model/tbUsuario')
const reservas = require('../model/tbReservaLocal')
const locais = require('../model/tbLocal')
const { Model } = require('sequelize')

module.exports = {
    async getUserVizualizarReservas(req, res){
        id = req.params.id

        const user = await usuario.findAll({
            raw: true,
            attributes: ['IDUsuario','EDV', 'Senha', 'Nome'],
            where: {IDUsuario: id}
        })

        const reserva = await reservas.findAll({
            raw: true,
            attributes: ['IDReservaLocal', 'Data', 'IDLocal'],
            where: {IDUsuario: id},
            include: {
                model: locais,
                attributes:['IDLocal', 'Nome', 'Capacidade']
            }
        })

        const local = await locais.findAll({
            raw: true,
            attributes: ['IDLocal', 'Nome', 'Capacidade']
        })

        res.render('../views/userVisualizarReservas', {reserva, user, local})
    
    }
}