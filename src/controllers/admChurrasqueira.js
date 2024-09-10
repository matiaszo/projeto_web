const usuario = require('../model/tbUsuario');
const churrasqueiras = require('../model/tbLocal');
const logChurrasqueiras = require('../model/tbLogLocal');
const { raw } = require('express');

module.exports = ({
    async getAdmChurrasqueiras(req,res){
        id = req.params.id

        const user = await usuario.findAll({
            raw: true,
            attributes: ['EDV', 'Senha', 'Nome', 'IDUsuario'],
            where: {IDUsuario: id}
        })

        const churrasqueira = await churrasqueiras.findAll({
            raw: true,
            attributes: ['IDLocal', 'Nome', 'Capacidade']
        })
        res.render('../views/admChurrasqueiras', {churrasqueira, user, erro: false})
    },
    async postAdmChurrasqueira(req, res){
        const data = req.body;
        const id = req.params.id

        const user = await usuario.findAll({
            raw: true,
            attributes: ['EDV', 'Senha', 'Nome', 'IDUsuario'],
            where: {IDUsuario: id}
        })

        const churrasqueira = await churrasqueiras.findAll({
            raw: true,
            attributes: ['IDLocal', 'Nome', 'Capacidade']
        })

        const repetida = await churrasqueiras.findAll({
            raw: true,
            attributes: ['Nome'],
            where: {Nome: data.nomeChurrasqueira}
        })


        if(repetida[0]){
            res.render('../views/admChurrasqueiras', {churrasqueira, user, erro: "Já existe uma churrasqueira com esse nome."});
            return;
        }

        await churrasqueiras.create({
            Nome: data.nomeChurrasqueira,
            Capacidade: data.capacidadeChurrasqueira
        });

        const idLocal = await churrasqueiras.findAll({
            raw: true,
            attributes: ['IDLocal'],
            where: {Nome: data.nomeChurrasqueira}
        })

        await logChurrasqueiras.create({
            IDLocal: idLocal[0].IDLocal,
            Nome: data.nomeChurrasqueira,
            Capacidade: data.capacidadeChurrasqueira,
            Acao: "Churrasqueira criada"
        });

 

        res.redirect('/admChurrasqueiras/'+id);
    }
})
