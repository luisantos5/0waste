/* const { response } = require("express"); */
const utilities = require('../utilities/utilities')
const utilizador = require("../models/model_utilizador");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const secret = "aqXQ8ZUtCFPTAxWs"

const salt = "L{vSUaf5vb~_=d/v"

//login
const login = (req, res) => {

    utilizador.findAll({ username: req.body.username }).then((result) => {
        if (result.length > 0) {
            bcrypt.compare(req.body.password, result[0].password).then(function (hash) {
                if (hash) {
                    utilities.generateToken({ utilizador: req.body.username }, (token) => {
                        res.status(200).json(token);
                    })
                } else {
                    res.status(401).send("Not Authorized");
                }
            }).catch((error) => {
                res.status(400).send(error);
            });
        } else {
            res.status(401).send("Not Authorized");
        }

    })
}

//register
const create = (req, res) => {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {

            const utilizadorToCreate = new utilizador({
                username: req.body.username,
                password: hash,
                nome: req.body.nome,
                data_nascimento: req.body.data_nascimento,
                is_admin: false
            });

            utilizador.findOne({
                "username": req.body.username
            }).then((result) => {
                console.log(result);
                if(result && result.id > 0) {
                    res.status(406).send("Utilizador já existente");
                } else {
                    utilizadorToCreate.save().then((result) => {
                        res.status(200).json({
                            message: "Registered User", 
                            object: result
                        });
                    }).catch((error) => {
                        res.status(400).send(error);
                    })
                }
            }).catch((error) => {
                console.log(error);
            })
        });

    });



}

const update = (req, res) => {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {

            //aplicar este excerto de codigo a todas os update que fizer
            jwt.verify(req.headers.authorization.replace('Bearer ', ''), secret, function(error, decoded) {
                let username = decoded.data.utilizador; 
                utilizador.update({
                    "password": hash
                }, {
                    where: { username: username } //token
                },).then((result) => {
                    console.log(result)
                    res.status(200).send("Password alterada com sucesso!");
                }).catch((error) => {
                    res.status(400).send(error);
                })
            })

            
        })
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
    utilizador.find({ name: req.params.name }, function (err, utilizadores) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).json(utilizadores);
    })
}

exports.login = login;
exports.create = create;
exports.list = list;
exports.update = update;
exports.getUtilizadoresByName = getUtilizadoresByName;