const receita = require('../models/model_receitas')
var jwt = require('jsonwebtoken');
const secret = "aqXQ8ZUtCFPTAxWs"
const utilizador = require("../models/model_utilizador");


const create = (req, res) => {

    /*     jwt.verify(req.headers.authorization.replace('Bearer ', ''), secret, function(error, decoded) {
            let username = decoded.data.utilizador; 
            utilizador.findAll({
                where: { username: username } 
            },).then((result) => {
                if(result && result[0].id) {
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
        }) */

    const receitaToCreate = new receita({
        id_utilizador: result[0].id,
        tituloReceita: req.body.tituloReceita,
        receita: req.body.receita,
        visualizacoes: 0
    });
    receitaToCreate.save().then((result) => {
        res.status(200).json({
            message: "Receita adicionada",
            object: result
        })
    }).catch((error) => {
        res.status(400).send(error);
    })


}

const list = (res) => {
    /*  receita.findAll(function (err, receitas) {
         if (err) {
             res.status(400).send(err);
         }else {
             res.status(200).json(receitas);
         }
     }) */
}

const getReceitasByName = (req, res) => {
    receita.findAll({ tituloReceita: req.params.tituloReceita }, function (err, receitas) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).json(receitas)
        }
    })
}

const getReceitasByUser = (req, res) => {
    receita.findAll({ id_utilizador: req.params.id_utilizador }, function (err, receitas) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).json(receitas)
        }
    })
}
const getReceitasById = (req, res) => {
    receita.findAll({ id_receita: req.params.id_receita }, function (err, receita) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).json(receita)
        }
    })
}

const update = (req, res) => {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.receita, salt, function (err, hash) {

            //aplicar este excerto de codigo a todas os update que fizer
            jwt.verify(req.headers.authorization.replace('Bearer ', ''), secret, function (error, decoded) {
                let username = decoded.data.utilizador;
                utilizador.update({
                    "receita": hash
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
