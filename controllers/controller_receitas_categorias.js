const receitas_categoria = require('../models/model_receitas_categorias')

const create = (req, res) => {

    jwt.verify(req.headers.authorization.replace('Bearer ', ''), secret, function (error, decoded) {
        let username = decoded.data.utilizador;
        utilizador.findAll({
            where: { username: username }
        }).then((result) => {
            if (result && result[0].id) {
                let newreceitas_categoria = {
                    id_receita: req.body.id_receita,
                    id_categoria: req.body.id_categoria
                };

                receitas_categoria.create(newreceitas_categoria).then((result) => {
                    res.status(200).json(result);
                }).catch((error) => {
                    console.log(error)
                })
            } else {
                res.status(401).send("Not authorized")
            }
        }).catch((error) => {
            res.status(400).send(error);
        })
    })

}

const list = (res) => {
    receita_categoria.findAll(function (err, receitas_categorias) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(receitas_categorias);
        }
    })
}

const getReceitas_CategoriasByName = (req, res) => {
    receita_categoria.findAll({ receita_categoria: req.params.receita_categoria }, function (err, receitas_categorias) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).json(receitas_categorias)
        }
    })
}

exports.create = create;
exports.list = list;
exports.getReceitas_CategoriasByName = getReceitas_CategoriasByName;
