const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Descontos = require('../models/Desconto')
const Pedidos = require('../models/Pedido')

const connection = new Sequelize(dbConfig);

Descontos.init(connection);
Pedidos.init(connection);


connection.authenticate().then(function () {
    console.log('Conectou com sucesso!')
}).catch(function (erro) {
    console.log('falha ao se conectar: ' + erro)
});

module.exports = connection;
