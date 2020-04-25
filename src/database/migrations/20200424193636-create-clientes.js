'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('clientes',
    { id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false

    },
    nome: {
      type: Sequelize.STRING,
      allowNul : false
    },
    createdAt:{
      type: Sequelize.DATE,
      allowNul : false
    },
    updatedAt:{
      type: Sequelize.DATE,
      allowNul : false
    }
      })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clientes');
    
  }
};
