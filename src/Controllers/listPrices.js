const sequelize = require('../Connection');
const price = require('../models/Price');

module.exports = {


    async listPrices (request,result){

      try {

       const resultado = await price.findAll();
       result.send(resultado);

      } catch (error) {
        result.send(error);
        console.log(error);       
      }
      }

    }





