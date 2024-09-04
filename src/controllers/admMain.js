const usuario = require("../model/tbUsuario")


module.exports = {
    async getAdmMain(req, res){
        data = req.params.id;
        const user = await usuario.findAll({
            raw: true,
            attributes: ['EDV', 'Senha', 'Nome', 'IDUsuario'],
            where: {IDUsuario: data}
        })
        res.render('../views/admPagPrincipal', {user})
        },
        async postAdmMain(req, res){
            console.log("yeaah sir");
        }
    }
