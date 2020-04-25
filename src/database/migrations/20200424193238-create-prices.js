'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('prices', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false

        },
        servico: {
          type: Sequelize.STRING,
          allowNul : false
        },
        valor: {
          type: Sequelize.DOUBLE
       
        },
        createdAt:{
          type: Sequelize.DATE,
          allowNul : false
        },
        updatedAt:{
          type: Sequelize.DATE,
          allowNul : false
        } });
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('price');
    
  }
};
