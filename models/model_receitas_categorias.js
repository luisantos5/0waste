const { Sequelize, Model, DataTypes } = require('sequelize'); 
const sequelize = new Sequelize('joaoferr_SIC_21_22_IND2', 'joaoferr_SIC_21_22_IND2', 'kzD9A74TCyBB3Lhj', {
    host: 'www.joaoferreira.eu',
    dialect: 'mysql'
})

class Receitas_Categorias extends Model {}

Receitas_Categorias.init({
    id_receita: DataTypes.NUMBER,
    id_categoria: DataTypes.NUMBER
}, { sequelize, modelName: 'receitas_categorias' });

sequelize.sync().then().catch(error => {
    console.log(error);
})

module.exports = Receitas_Categorias;