'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('price', { 
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
        created_at:{
          type: Sequelize.DATE,
          allowNul : false
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNul : false
        } });
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('price');
    
  }
};
