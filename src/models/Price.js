
const { Model, DataTypes } = require('sequelize');

class Price extends Model {
    static init(sequelize) {
        super.init({
            servico: DataTypes.STRING,
            valor: DataTypes.DOUBLE


        }, {
            sequelize
        })
    }
}


module.exports = Price;