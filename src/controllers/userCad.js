const usuario = require('../model/tbUsuario');
const logUsuario = require('../model/tbLogUsuario');
const { raw } = require('express');
const { where } = require('sequelize');


module.exports = {
    async getUserCadastro(req, res){
        res.render('../views/userCadastro', {data: '', erro: false});
    },
    
    async postUserCadastro(req, res){
        data = req.body;
        const senha = data.senha;
        const senhaConfirmada = data.confirmarsenha;

        const user = await usuario.findAll({
            raw: true,
            attributes: ['EDV'],
            where: {EDV: data.edv}
        });

        if (user[0]){
            res.render('../views/logIn', {erro: "EDV já cadastrado!"});
            return;
        }

        if(senha != senhaConfirmada){
            res.render('../views/userCadastro', {data, erro: "Digite a mesma senha para confirmar o seu cadastro"});
            return;
        }

        await usuario.create({ 
            Nome: data.nome,
            Sobrenome: data.sobrenome,
            Email: data.email,
            EDV: data.edv,
            Adm: false,
            Senha: senha
        });

        const idUsuario = await usuario.findAll({
            raw: true,
            attributes: ['IDUsuario'],
            where: {Nome: data.nome, 
                Sobrenome: data.sobrenome,
                Email: data.email,
                EDV: data.edv,
                Senha: data.senha,
            }
        })
               
        logUsuario.create({
            IDUsuario: idUsuario[0].IDUsuario,
            Nome: data.nome,
            Sobrenome: data.sobrenome,
            Email: data.email,
            EDV: data.edv,
            Adm: false,
            Senha: senha,
            Acao: "Novo usuario criado"
        })
        res.redirect('../logIn');
    }
}
