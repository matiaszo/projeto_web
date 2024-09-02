const usuario = require('../model/tbUsuario');
const logUsuario = require('../model/tbLogUsuario');
const { where } = require('sequelize');
// import {
//     hash
//   } from 'bcryptjs';

module.exports = {
    async getUserCadastro(req, res){
        console.log(123);
        res.render('../views/userCadastro');
    },
    
    async postUserCadastro(req, res){
        data = req.body;
        const senha = data.senha;
        // const senhaCriptografada = await hash(senha,4);

        await usuario.create({ 
            Nome: data.nome,
            Sobrenome: data.sobrenome,
            Email: data.email,
            EDV: data.edv,
            Adm: false,
            Senha: senha,
            Ativo: true 
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
            Ativo: true,
            Acao: "Novo usuario criado"
        })
        res.redirect('../logIn');
    }
}
