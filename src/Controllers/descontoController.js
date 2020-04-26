const sequelize = require('../database/Index');
const Descontos = require('../models/Desconto');

module.exports = {

  async createDiscounts (req,res){
    try{
        const {tipoDesconto,valor,idCliente} = req.body;
        const discounts = await Descontos.create({tipoDesconto,valor,idCliente});

       res.json(discounts);

    }catch (error) {
      res.send(error);
      console.log(error);       
    }
}}





