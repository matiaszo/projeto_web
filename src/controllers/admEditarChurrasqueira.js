const { where } = require('sequelize');
const { use } = require('../../routes');

const churrasqueiras = require('../model/tbLocal');
const logChurrasqueiras = require('../model/tbLogLocal');
const usuario = require('../model/tbUsuario');

module.exports = {
    async postAdmEditarChurrasqueira(req, res){
    let data = req.body;
    let idUser = req.params.iduser;
    let idLocal = req.params.idlocal;

    const user = await usuario.findAll({
        raw: true,
        attributes: ['EDV', 'Senha', 'Nome', 'IDUsuario'],
        where: {IDUsuario: idUser}
    })

    await churrasqueiras.update({
        Nome: data.nomeChurrasqueira,
        Capacidade: data.capacidadeChurrasqueira},
        {
            where: {IDLocal: idLocal}}
    )

    await logChurrasqueiras.create({
        IDLocal: idLocal,
        Nome: data.nomeChurrasqueira,
        Capacidade: data.capacidadeChurrasqueira,
        Acao: 'churrasqueira EDITADA'
    })
    res.redirect('/admChurrasqueiras/' + idUser);
    }
}