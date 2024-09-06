const usuario = require('../model/tbUsuario');
const logUsuario = require('../model/tbLogUsuario');

// import {
//     hash
//   } from 'bcryptjs';

module.exports = {
    async getUserCadastro(req, res){
        res.render('../views/userCadastro');
    },
    
    async postUserCadastro(req, res){
        data = req.body;
        const senha = data.senha;

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
