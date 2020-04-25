const sequelize = require('../database/Index');
const Price = require('../models/Price');

module.exports = {

  async listPrices (req,res){  
    try{  

      const price = await Price.findAll();

      return res.json(price);
    } catch (error) {
      res.send(error);
      console.log(error);       
    }
    
  },
    async incPrices (req,res){

      try {
        const {servico,valor} = req.body;

        const price = await Price.create({servico,valor});
         return res.json(price);
      

      } catch (error) {
        res.send(error);
        console.log(error);       
      }
      }

    }





