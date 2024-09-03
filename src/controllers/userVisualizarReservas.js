const usuario = require('../model/tbUsuario')
const reservas = require('../model/tbReservaLocal')

module.exports = {
    async getUserVizualizarReservas(req, res){
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
        res.render('../views/userVisualizarReservas', {reserva, user})
    }
}