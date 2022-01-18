const receitas_categoria = require('../models/model_receitas_categorias')

const create = (req, res) => {
    
    const receitas_categoriaToCreate = new receitas_categoria({
        id_receita: req.body.id_receita,
        id_categoria: req.body.id_categoria
    });

    receitas_categoriaToCreate.save(function (err, newReceitas_categoria) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(newReceitas_categoria);
        }
    })

}

const list = (res) => {
    receita_categoria.findAll(function (err, receitas_categorias) {
        if (err) {
            res.status(400).send(err);
        }else {
            res.status(200).json(receitas_categorias);
        }
    })
}

const getReceitas_CategoriasByName = (req, res) => {
    receita_categoria.findAll({receita_categoria: req.params.receita_categoria}, function (err, receitas_categorias) {
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
