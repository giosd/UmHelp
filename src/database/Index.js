const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Price = require('../models/Price')
const Descontos = require('../models/Desconto')
const Pedidos = require('../models/Pedido')

const connection = new Sequelize(dbConfig);

Price.init(connection);
Descontos.init(connection);
Pedidos.init(connection);


connection.authenticate().then(function () {
    console.log('Conectou com sucesso!')
}).catch(function (erro) {
    console.log('falha ao se conectar: ' + erro)
});

module.exports = connection;
