const receita = require('../models/model_receitas')
var jwt = require('jsonwebtoken');
const secret = "aqXQ8ZUtCFPTAxWs"
const utilizador = require("../models/model_utilizador");


const create = (req, res) => {

    jwt.verify(req.headers.authorization.replace('Bearer ', ''), secret, function (error, decoded) {
        let username = decoded.data.utilizador;
        utilizador.findAll({
            where: { username: username }
        }).then((result) => {
            if (result && result[0].id) {
                let newReceita = {
                    id_utilizador: result[0].id,
                    tituloReceita: req.body.tituloReceita,
                    receita: req.body.receita,
                    visualizacoes: 0
                };

                receita.create(newReceita).then((result) => {
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
      receita.findAll(function (err, receitas) {
         if (err) {
             res.status(400).send(err);
         }else {
             res.status(200).json(receitas);
         }
     }) 
} 

const getReceitasByName = (req, res) => {
    receita.findAll({
        where: {
            tituloReceita: req.params.tituloReceita
        },
    }).then((list) => {
        res.status(200).json(list)
    }).catch((err) => {
        res.status(400).send("Error");
    })
}



const getReceitasByUser = (req, res) => {
    receita.findAll({
        where: {
            id_utilizador: req.params.id_utilizador
        },
    }).then((list) => {
        res.status(200).json(list)
    }).catch((err) => {
        res.status(400).send("Error");
    })
    
}
const getReceitasById = (req, res) => {
    receita.findAll({
        where: {
            id: req.params.id
        },
    }).then((list) => {
        res.status(200).json(list)
    }).catch((err) => {
        res.status(400).send("Error");
    })
}

const deleteReceita = (req, res) => {
    receitas.deleteOne({
            id: req.params.id
        },
        function (err, receitas) {
            if (err) {
                res.status(400).send(err)
            }
            res.status(200).send("Receita Eliminada!")
        })
}

const update = (req, res) => {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.receita, salt, function (err, hash) {

            //aplicar este excerto de codigo a todas os update que fizer
            jwt.verify(req.headers.authorization.replace('Bearer ', ''), secret, function (error, decoded) {
                let receita = decoded.data.receita;
                receita.update({
                    "receita": string
                }, {
                    where: { username: username } //token
                }).then((result) => {
                    console.log(result)
                    res.status(200).send("Receita alterada com sucesso!");
                }).catch((error) => {
                    res.status(400).send(error);
                })
            })


        })
    })
}



exports.create = create;
exports.list = list;
exports.getReceitasByName = getReceitasByName;
exports.getReceitasByUser = getReceitasByUser;
exports.getReceitasById = getReceitasById;
exports.update = update;
exports.deleteReceita = deleteReceita;
