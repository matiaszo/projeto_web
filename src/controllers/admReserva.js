const reservas = require('../model/tbReservaLocal');
const locais = require('../model/tbLocal');
const usuarios = require('../model/tbUsuario') 

module.exports = ({
    async getAdmReserva(req, res){
        const reserva = await reservas.findAll({
            raw:true,
            include: [{
                model: locais,
                attributes: ['Nome'],
            },
            {
                model: usuarios,
                attributes: ['Nome']
            }],
        })
        
        console.log(reserva[0]['Local.Nome']);
        res.render('../views/admReservas', {reserva});
    }
})