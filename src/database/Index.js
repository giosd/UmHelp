const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

connection.authenticate().then(function(){
    console.log('Conectou com sucesso!')
}).catch(function(erro){
    console.log('falha ao se conectar: '+erro)
});

module.exports = connection;
