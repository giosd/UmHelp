const sequelize = require('../database/Index');
const Price = require('../models/Price');

module.exports = {

  async idPrice (req,res){
    try{
      const id = req.params.id;
      const busca = await Price.findAll({
        where: {
          id: id
        }
      });

      return res.json(busca);

    }catch (error) {
      res.send(error);
      console.log(error);       
    }
  },

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





