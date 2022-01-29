var express = require('express')
var router = express.Router()
var controller = require('../controllers/controller_receitas_categorias')
const { validationResult, body } = require('express-validator')

router.post('/', [

    body('id_receita').notEmpty().isString().escape(),
    body('id_categoria').isString().notEmpty().escape()
], function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        controller.create(req, res);
    } else {
        res.status(404).json({ errors: errors.array() })
    }
})

