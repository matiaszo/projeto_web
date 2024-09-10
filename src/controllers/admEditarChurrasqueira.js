const { where } = require('sequelize');
const { use } = require('../../routes');

const churrasqueiras = require('../model/tbLocal');
const logChurrasqueiras = require('../model/tbLogLocal');
const usuario = require('../model/tbUsuario');
const { raw } = require('express');

module.exports = {
    async postAdmEditarChurrasqueira(req, res){
    let data = req.body;
    let idUser = req.params.iduser;
    let idLocal = req.params.idlocal;

    const churrasqueira = await churrasqueiras.findAll({
        raw: true,
        attributes: ['IDLocal', 'Nome', 'Capacidade']
    })

    const user = await usuario.findAll({
        raw: true,
        attributes: ['EDV', 'Senha', 'Nome', 'IDUsuario'],
        where: {IDUsuario: id}
    })

    const repetido = await churrasqueiras.findAll({
        raw: true,
        attributes: ['IDLocal'],
        where: {Nome: data.nomeChurrasqueira}
    })

    if (repetido[0]){
        res.render('../views/admChurrasqueiras', {churrasqueira, user, erro: 'Voce não pode colocar o mesmo nome em duas churrasqueiras!'});
        return;
    }

    await churrasqueiras.update({
        Nome: data.nomeChurrasqueira,
        Capacidade: data.capacidadeChurrasqueira},
        {
            where: {IDLocal: idLocal}
        }
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