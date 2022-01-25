const categorias = require('../models/model_categorias')

const create = (req, res) => {

    const categoriaToCreate = new categoria({
        id_categoria: req.body.id_categoria,
        categoria: req.body.categoria
    });

    categoriaToCreate.save(function (err, categoria) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(categoria);
        }
    })

}

const list = (res) => {
    categorias.findAll(function (err, categorias) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(categorias);
        }
    })
}

const getCategoriasByName = (req, res) => {
    categorias.findAll({ categoria: req.params.categoria }, function (err, categorias) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).json(categorias)
        }
    })
}

exports.create = create;
exports.list = list;
exports.getCategoriasByName = getCategoriasByName;
