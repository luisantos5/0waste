const express = require('express')
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('joaoferr_SIC_21_22_IND2', 'joaoferr_SIC_21_22_IND2', 'kzD9A74TCyBB3Lhj', {
    host: 'www.joaoferreira.eu',
    dialect: 'mysql'
})
const utilizador = require('./routes/route_utilizador');
const receitas = require('./routes/route_receita');
const app = express()
/* const port = process.env.PORT || 3000 */
const port = process.env.PORT || 5000
const utilities = require('./utilities/utilities')

const auth = function(req, res, next) {
    let exceptions = ['/login', '/register']; 
    if(exceptions.indexOf(req.url) >= 0) {
        next(); 
    } else {
        utilities.validateToken(req.headers.authorization, (result) => {
            if(result) {
                next(); 
            } else {
                res.status(401).send("Invalid Token"); 
            }
        })
    }
}


app.use(express.json());
app.use(auth);
app.use('/', utilizador) 
app.use('/receitas', receitas) 


app.get('/', (req, res) => {
    console.log("Request Arrived")
    res.send(" 0 WASTE API ")
})

app.listen(port, () => {
    sequelize.authenticate().then(function(erros)  {
        if(erros) {
            console.log("Authentication Failed: ", errors)
        } else {
            console.log("Authentication MYSQL Success")
        }
    })
    console.log(`Serving on http://localhost:${port}`)
})


