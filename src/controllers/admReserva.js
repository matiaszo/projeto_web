const reservas = require('../model/tbReservaLocal');
const locais = require('../model/tbLocal');
const usuarios = require('../model/tbUsuario'); 


module.exports = {
    async getAdmReserva(req, res){
        const idUser = req.params.id
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
        
        const user = await usuarios.findAll({
            raw: true,
            attributes: ['EDV', 'Senha', 'Nome', 'IDUsuario'],
            where: {IDUsuario: idUser}
        })

        res.render('../views/admReservas', {reserva, local, id: '', user});
    },
    async postAdmReserva(req, res){
        const idUser = req.params.id
        const idLocal = req.body.local;

        if(idLocal == 'none'){
            res.redirect('/admReservas/' + idUser);
            return;
        }

        const user = await usuarios.findAll({
            raw: true,
            attributes: ['EDV', 'Senha', 'Nome', 'IDUsuario'],
            where: {IDUsuario: idUser}
        })

        const local = await locais.findAll({
            raw: true,
            attributes: ['IDLocal', 'Nome', 'Capacidade']
        })
        const reserva = await reservas.findAll({
            raw:true,
            where: {IDLocal: idLocal},
            include: [{
                model: locais,
                attributes: ['Nome', 'IDLocal'],
            },
            {
                model: usuarios,
                attributes: ['Nome', 'EDV']
            }],
        })
        
       res.render('../views/admReservas', {reserva, local, id: idLocal, user}); 
    }
} 

