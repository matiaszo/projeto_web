const usuario = require('../model/tbUsuario');
const churrasqueiras = require('../model/tbLocal');


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
        res.render('../views/admChurrasqueiras', {churrasqueira, user})
    },
    async postAdmChurrasqueira(req, res){
        data = req.body;
        id = req.params.id

        await churrasqueiras.create({
            Nome: data.nomeChurrasqueira,
            Capacidade: data.capacidadeChurrasqueira,
            Ativo: true
        })

        res.redirect('/admChurrasqueiras/'+id);
    }
})