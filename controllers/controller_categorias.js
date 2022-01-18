const categorias = require('../models/model_categorias')

const create = (req, res) => {
    
    const categoriaToCreate = new pontuacao({
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
        }else {
            res.status(200).json(categorias);
        }
    })
}
 // getCategoriasByName???? 

exports.create = create;
exports.list = list;
