const usuarios = require("../model/tbUsuario")

module.exports = {
    async getLogIn(req,res){
        res.render('../views/logIn')
    },
    
    async postLogIn(req, res){
        data = req.body
        const usuario = await usuarios.findAll({
            raw: true,
            attributes: ['IDUsuario','EDV', 'Senha', 'Adm'],
            where: {EDV: data.edv}
        })
        if (!usuario[0]){            
            res.render('../views/logIn')
            return;
        }

            if (usuario[0].EDV == data.edv && usuario[0].Senha == data.senha){
                if (usuario[0].Adm == 1){
                    res.redirect('/admPagPrincipal/' + usuario[0].IDUsuario)
                }else{
                    res.redirect('/userPagPrincipal/' + usuario[0].IDUsuario)
                }
            }else{
                res.render('../views/logIn')
        }
    }
}
