const receita = require('../models/model_receitas')

const create = (req, res) => {
    
    const receitaToCreate = new receita({
        id_utilizador: req.body.id_utilizador,
        tituloReceita: req.body.tituloReceita,   //ATUALIZAr
        receita: req.body.receita,
        visualizacoes: 0  //DUVIDA
        // fazer routa put para atualizar couunt com id_receita i++

    });

    receitaToCreate.save(function (err, newReceita) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(newReceita);
        }
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
    receita.findAll({tituloReceita: req.params.tituloReceita}, function (err, receitas) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).json(receitas)
        }
    })
}

const getReceitasByUser = (req, res) => {
    receita.findAll({id_utilizador: req.params.id_utilizador}, function (err, receitas) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).json(receitas)
        }
    })
}
const getReceitasById = (req, res) => {
    receita.findAll({id_receita: req.params.id_receita}, function (err, receita) {
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
            jwt.verify(req.headers.authorization.replace('Bearer ', ''), secret, function(error, decoded) {
                let username = decoded.data.utilizador; 
                utilizador.update({
                    "receita": hash
                }, {
                    where: { username: username } //token
                },).then((result) => {
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
exports.getReceitasByUser= getReceitasByUser;
exports.getReceitasById = getReceitasById;
exports.update = update;
