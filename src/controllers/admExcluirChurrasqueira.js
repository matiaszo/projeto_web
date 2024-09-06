const { where } = require('sequelize');

locais = require('../model/tbLocal');
logLocais = require('../model/tbLogLocal');
reservas = require('../model/tbReservaLocal');
logReservas = require('../model/tbLogReservaLocal');
module.exports = {
    async postAdmExcluirChurrasqueira(req ,res){

        idLocal = req.params.idlocal
        idUser = req.params.iduser

        localExcluido = await locais.findAll({
            raw: true,
            attributes: ['Nome', 'Capacidade'],
            where: {IDLocal: idLocal}
        })

        const reserva = await reservas.findAll({
            raw:true,
            attributes: ['IDReservaLocal', 'IDUsuario', 'Data'],
            where: {IDLocal: idLocal}
        })

        for(let i = 0; i < reserva.length; i++){
            await logReservas.create({
                IDUsuario: reserva[i].IDUsuario,
                IDLocal: idLocal,
                IDReservaLocal: reserva[i].IDReservaLocal,
                Data: reserva[i].Data,
                Acao: "reserva EXCLUIDA"
            })
        }
        await reservas.destroy({
            where: {IDLocal: idLocal}
        })

        await logLocais.create({
            IDLocal: idLocal,
            Nome: localExcluido[0].Nome,
            Capacidade: localExcluido[0].Capacidade,
            Acao: "churrasqueira EXCLUIDA"
        })
        await locais.destroy({
            where: {IDLocal: idLocal}
        })
        res.redirect('/admChurrasqueiras/' + idUser);
    }
}
