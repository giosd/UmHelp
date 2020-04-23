const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste','root','12345',{
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log('Conectou com sucesso!')
}).catch(function(erro){
    console.log('falha ao se conectar: '+erro)
});

/*const Price = sequelize.define('price', {
    servico:{
        type: Sequelize.STRING
    },
    valor:{
        type: Sequelize.DOUBLE
    }
    
});
*/
//Price.sync({force:true});

//Price.create({
 //servico:"serviço1",
  //  valor:100

  //})

  module.exports = sequelize;
