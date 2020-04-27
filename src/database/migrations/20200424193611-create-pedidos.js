'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('pedidos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false
      },
      duracao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      idServico: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valor: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNul: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNul: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pedidos');
  }
};
