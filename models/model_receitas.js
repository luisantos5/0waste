const { Sequelize, Model, DataTypes } = require('sequelize'); 
const sequelize = new Sequelize('joaoferr_SIC_21_22_IND2', 'joaoferr_SIC_21_22_IND2', 'kzD9A74TCyBB3Lhj', {
    host: 'www.joaoferreira.eu',
    dialect: 'mysql'
})

class Receitas extends Model {}

Receitas.init({
    id_utilizador: DataTypes.STRING,
    receita: DataTypes.STRING,
    visualizacoes: DataTypes.INTEGER
}, { sequelize, modelName: 'receitas' });

sequelize.sync().then().catch(error => {
    console.log(error);
})

module.exports = Receitas;