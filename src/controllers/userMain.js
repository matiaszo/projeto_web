const usuario = require("../model/tbUsuario")


module.exports = {
    async getUserMain(req, res){
        data = req.params.id;

        const user = await usuario.findAll({
            raw: true,
            attributes: ['IDUsuario','EDV', 'Senha', 'Nome'],
            where: {IDUsuario: data}
        })

        res.render('../views/userPagPrincipal', {user})
    },


        async postUserMain(req, res){
            console.log("yeaah budy");
        }
    }
