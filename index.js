const express = require('express')
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('joaoferr_SIC_21_22_IND2', 'joaoferr_SIC_21_22_IND2', 'kzD9A74TCyBB3Lhj', {
    host: 'www.joaoferreira.eu',
    dialect: 'mysql'
})
const Utilizador = require('./models/model_utilizador');
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log("Request Arrived")
    res.send(" 0 WASTE API ")
})

sequelize.authenticate().then(function(erros)  {
    if(erros) {
        console.log("Authentication Failed: ", errors)
    } else {
        console.log("Authentication MYSQL Success")
    }
})

app.listen(port, () => {
    console.log(`Serving on http://localhost:${port}`)
})