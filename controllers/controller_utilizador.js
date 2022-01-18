const utilizador = require("../models/model_utilizador"); 

const create = (req, res) => {

    utilizador.findOne({
        "username": req.body.username
    }, (error, utilizador) => {
        if (error) throw error;
        if (utilizador) return res.status(408).send(utilizador)
    })

    const utilizadorToCreate = new utilizador({ 
        username: req.body.username,
        password: req.body.password,
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento,
        is_admin: false
    });

    utilizadorToCreate.save(function (err, newUtilizador) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(newUtilizador); 
    })

} 

const list = (res) => {
    utilizador.find(function (err, utilizadores) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(utilizadores); 
    })
}

const getUtilizadoresByName = (req, res) => {
    utilizador.find({name: req.params.name}, function (err, utilizadores) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(utilizadores); 
    })
}

exports.create = create; 
exports.list = list;
exports.getUtilizadoresByName = getUtilizadoresByName;