var express = require('express')
var router = express.Router()
var controller = require('../controllers/controller_receita')
const { validationResult, body, param} = require('express-validator')



router.post('/', [
    
    body('tituloReceita').notEmpty().isString().isLength({ min: 5 }),
    body('receita').isString().notEmpty().escape()
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.create(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

router.get('/:tituloReceita', [
    param('tituloReceita').notEmpty().escape(),
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.getReceitasByName = (req, res)
    } else {
        res.status(404).json({errors: errors.array()})
    }
}) 

router.get('/id_utilizador', [
    param('id_utilizador').notEmpty().escape(),
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.getReceitasByUser = (req, res)
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

router.get('/id', [
    param('id').notEmpty().escape(),
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.getReceitasById = (req, res)
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

router.delete('/:id', [
    param('id').notEmpty().escape(),
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.deleteReceita = (req, res)
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

router.put('/:id', [
    param('id').notEmpty().escape(),
    body('id').notEmpty().escape(),
    body('receita').notEmpty().escape(),
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.getReceitasById = (req, res)
        controller.update(req,res)
    } else {
        res.status(404).json({errors: errors.array()})
    }
})




module.exports = router