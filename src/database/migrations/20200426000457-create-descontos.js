'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('descontos',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

      },
      tipoDesconto: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valor:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      idCliente:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNul : false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNul : false
      }
    }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('descontos');
  }
};
