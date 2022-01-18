const pontuacoes = require('../models/model_pontuacoes')

const create = (req, res) => {
    
    const pontuacaoToCreate = new pontuacao({
        id_receita: req.body.id_receita,
        id_utilizador: req.body.id_utilizador,
        pontuacao: req.body.pontuacao
    });

    pontuacaoToCreate.save(function (err, pontuacao) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(pontuacao);
        }
    })

}

const list = (res) => {
    pontuacoes.findAll(function (err, pontuacoes) {
        if (err) {
            res.status(400).send(err);
        }else {
            res.status(200).json(pontuacoes);
        }
    })
}


exports.create = create;
exports.list = list;
