
const connection = require('../database/Index')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

const Price = sequelize.define('price', {
  servico: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valor: {
    type: DataTypes.DOUBLE
 
  }
}, {
  
});


console.log(Price === sequelize.models.Price); // true

// const Price = Sequelize.define('price', {
//     servico:{
//         type: Sequelize.STRING
//     },
//     valor:{
//         type: Sequelize.DOUBLE
//     }
    
// })

module.exports = Price;