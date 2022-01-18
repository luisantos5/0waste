var express = require('express')
var router = express.Router()
var controller = require('../controllers/controller_utilizador.js')
const { validationResult, body} = require('express-validator')

/* router.post('/login',  function (req, res) {
    controller.login(req, res); 
}) */

router.post('/register', [
    body('username').notEmpty().escape().exists(),
    body('password').notEmpty().isString().isLength({ min: 8 }),
    body('nome').isString().notEmpty().escape(),
    body('data_nascimento').isString().notEmpty().escape()    
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.create(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

router.get('/listar/:id_utilizador', [
    param('id_utilizador').notEmpty().escape(),
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.getUtilizadoresByName(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})
/* 
FAZERR
router.put(mudar pass e mudar dados pessoais, recuperar pass) */
module.exports = router