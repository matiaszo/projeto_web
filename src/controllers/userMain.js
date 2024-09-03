const usuario = require("../model/tbUsuario")


module.exports = {
    async getUserMain(req, res){
        data = req.params.id;
        console.log(data);
        const user = await usuario.findAll({
            raw: true,
            attributes: ['EDV', 'Senha', 'Nome', 'IDUsuario'],
            where: {IDUsuario: data}
        })
        res.render('../views/userPagPrincipal', {user})
        },
        async postUserMain(req, res){
            console.log("yeaah budy");
        }
    }
