var express = require('express')
var router = express.Router()
var controller = require('../controllers/controller_receita')
const { validationResult, body} = require('express-validator')



router.post('/novareceita', [
    
    body('passtituloReceitaword').notEmpty().isString().isLength({ min: 5 }),
    body('receita').isString().notEmpty().escape(), 
     ///router vizualizações//

],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.create(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

router.get('/receitas/:id_receita', [
    param('id_receita').notEmpty().escape(),
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.getReceitasByUser = (req, res)
    } else {
        res.status(404).json({errors: errors.array()})
    }
}) 

router.get('/receitas/:id_utilizador', [
    param('pesquisa').notEmpty().escape(),
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.getReceitasByUser = (req, res)
    } else {
        res.status(404).json({errors: errors.array()})
    }
})
//param?? controller?
router.delete('/receitas/:id_receita', [
    param('id_receita').notEmpty().escape(),
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.getReceitasById = (req, res)
    } else {
        res.status(404).json({errors: errors.array()})
    }
})
//alterar puts
router.put('/receitas/:id_receita', [
    param('id_receita').notEmpty().escape(),
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