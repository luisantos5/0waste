const { Sequelize, Model, DataTypes } = require('sequelize'); 
const sequelize = new Sequelize('joaoferr_SIC_21_22_IND2', 'joaoferr_SIC_21_22_IND2', 'kzD9A74TCyBB3Lhj', {
    host: 'www.joaoferreira.eu',
    dialect: 'mysql'
})

class Utilizador extends Model {}

Utilizador.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    nome: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    is_admin: DataTypes.BOOLEAN 
}, { sequelize, modelName: 'utilizador' });

sequelize.sync().then().catch(error => {
    console.log(error);
})

module.exports = Utilizador;