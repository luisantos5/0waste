//fazer fora 
router.get(categorias)

var express = require('express')
var router = express.Router()
var controller = require('../controllers/controller_receita')
const { validationResult, body} = require('express-validator')
