const { where } = require('sequelize');

locais = require('../model/tbLocal');
logLocais = require('../model/tbLogLocal');
module.exports = {
    async postAdmExcluirChurrasqueira(req ,res){

        idLocal = req.params.idlocal
        idUser = req.params.iduser

        localExcluido = await locais.findAll({
            raw: true,
            attributes: ['Nome', 'Capacidade'],
            where: {IDLocal: idLocal}
        })

        await logLocais.create({
            IDLocal: idLocal,
            Nome: localExcluido[0].Nome,
            Capacidade: localExcluido[0].Capacidade,
            Ativo: 0,
            Acao: "local EXCLUIDO"
        })
        await locais.destroy({
            where: {IDLocal: idLocal}
        })
        res.redirect('/admChurrasqueiras/' + idUser);
    }
}