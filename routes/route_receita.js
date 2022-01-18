var express = require('express')
var router = express.Router()
var controller = require('../controllers/controller_receita')
const { validationResult, body} = require('express-validator')



router.post('/novareceita', [
    body('id_receita').notEmpty().escape(), //gerado automaticamente
    body('id_utilizador').notEmpty().escape(), //tem de ser passado autoaticamente como fazeer??
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

router.get('/receitas/:id_utilizador', [
    param('id_utilizador').notEmpty().escape(),
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.getReceitasByUser = (req, res)
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

router.get('/receitas/:pesquisa', [
    param('pesquisa').notEmpty().escape(),
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.getReceitasByName = (req, res)
    } else {
        res.status(404).json({errors: errors.array()})
    }
})
//VALIDAdo, fazeeer!

//nao sei fazer .delete pedir exemplos
// faltam rotas?

/* router.delete('/receitas/:id_receita', [
    param('id_receita').notEmpty().escape(),
    ], function (req, res) {
        const errors = validationResult(req);
        if (errors.isEmpty(){
            controller.getReceitasById = (req, res)
        } else {
            res.status(404).json({errors: errors.array()})
        })
    }) */
router.put('/receitas/:id_receita')
router.put('/receitas/visualizacoes/:id_receita')
router.put('receitas/pontuacoes/:id_receita')
//fazer fora 
router.get(categroias)
module.exports = router