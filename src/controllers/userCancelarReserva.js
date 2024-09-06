const {where} =  require ('sequelize')

const reserva = require ('../model/tbReservaLocal');
const logReservaLocal = require ('../model/tbLogReservaLocal');


module.exports = {
    async postUserExcluirReserva(req, res){
        idReserva = req.params.idreserva;

        const reservaCancelada = await reserva.findOne({
            raw:true,
            where:{IDReservaLocal:idReserva}
        })

        await logReservaLocal.create({
            IDUsuario : reservaCancelada.IDUsuario,
            IDLocal: reservaCancelada.IDLocal,
            IDReservaLocal: idReserva,
            Data: Date.now(),
            Acao: 'Reserva CANCELADA'
        })

        await reserva.destroy({
            where:{IDReservaLocal: idReserva}
        })

        res.redirect('/userVisualizarReservas/' + reservaCancelada.IDUsuario);
    }
}
