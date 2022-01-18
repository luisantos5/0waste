const { Sequelize, Model, DataTypes } = require('sequelize'); 
const sequelize = new Sequelize('joaoferr_SIC_21_22_IND2', 'joaoferr_SIC_21_22_IND2', 'kzD9A74TCyBB3Lhj', {
    host: 'www.joaoferreira.eu',
    dialect: 'mysql'
})

class Categorias extends Model {}

Categorias.init({
    id_categoria: DataTypes.NUMBER,
    categoria: DataTypes.STRING
}, { sequelize, modelName: 'categorias' });

sequelize.sync().then().catch(error => {
    console.log(error);
})

module.exports = Categorias;