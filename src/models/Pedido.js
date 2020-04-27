const { Model, DataTypes } = require('sequelize');

class Pedido extends Model {
    static init(sequelize) {
        super.init({
            idCliente: DataTypes.INTEGER,
            data: DataTypes.DATE,
            duracao: DataTypes.STRING,
            idServico: DataTypes.INTEGER,
            valor: DataTypes.DOUBLE,


        }, {
            sequelize
        })
    }
}

module.exports = Pedido;