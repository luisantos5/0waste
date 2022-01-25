var express = require('express')
var router = express.Router()
var controller = require('../controllers/controller_utilizador.js')
const { validationResult, body, param,} = require('express-validator')

router.post('/login', [
    body('username').notEmpty().escape().exists(),
    body('password').notEmpty().isString().isLength({ min: 8 }),   
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.login(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

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

router.put('/', [
    body('password').notEmpty().isString().isLength({ min: 8 }),   
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.update(req, res);  //create?
    } else {
        res.status(404).json({errors: errors.array()})
    }
})
module.exports = router