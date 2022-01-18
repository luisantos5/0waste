const { Sequelize, Model, DataTypes } = require('sequelize'); 
const sequelize = new Sequelize('joaoferr_SIC_21_22_IND2', 'joaoferr_SIC_21_22_IND2', 'kzD9A74TCyBB3Lhj', {
    host: 'www.joaoferreira.eu',
    dialect: 'mysql'
})

class Pontuacoes extends Model {}

Pontuacoes.init({
    id_receita: DataTypes.NUMBER,
    id_utilizador: DataTypes.STRING,
    pontuacao: DataTypes.NUMBER
}, { sequelize, modelName: 'pontuacoes' });

sequelize.sync().then().catch(error => {
    console.log(error);
})

module.exports = Pontuacoes;