const reservas = require('../model/tbReservaLocal');
const locais = require('../model/tbLocal');
const usuarios = require('../model/tbUsuario'); 


module.exports = {
    async getAdmReserva(req, res){
        const local = await locais.findAll({
            raw: true,
            attributes: ['IDLocal', 'Nome', 'Capacidade']
        })

        const reserva = await reservas.findAll({
            raw:true,
            include: [{
                model: locais,
                attributes: ['Nome', 'IDLocal'],
            },
            {
                model: usuarios,
                attributes: ['Nome', 'EDV']
            }],
        })
        
        console.log(reserva);
        res.render('../views/admReservas', {reserva, local, id: ''});
    },
    async postAdmReserva(req, res){
        id = req.body.local
        const local = await locais.findAll({
            raw: true,
            attributes: ['IDLocal', 'Nome', 'Capacidade']
        })
        const reserva = await reservas.findAll({
            raw:true,
            where: {IDLocal: id},
            include: [{
                model: locais,
                attributes: ['Nome', 'IDLocal'],
            },
            {
                model: usuarios,
                attributes: ['Nome', 'EDV']
            }],
        })
        
       res.render('../views/admReservas', {reserva, local, id}); 
    }
} 

