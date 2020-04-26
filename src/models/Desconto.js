const { Model,DataTypes } = require('sequelize');

class Descontos extends Model {
    static init(sequelize){
        super.init({
            
            tipoDesconto: DataTypes.INTEGER,
            valor: DataTypes.INTEGER,
            idCliente: DataTypes.INTEGER

        },{
            sequelize
        })
    }
}

module.exports = Descontos;