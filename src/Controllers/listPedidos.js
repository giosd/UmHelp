const sequelize = require('../database/Index');
const Pedidos = require('../models/Pedido');
const Price = require('../models/Price');
//const Desconto = require('../models/Descontos');

module.exports = {

    async listPedido(req,res){
       try{ 
        
        const idPedido = req.params.id
        console.log(idPedido);
        const buscaPedido = await Pedidos.findByPk(idPedido)

        return res.json(buscaPedido);

       }catch (error) {
        res.send(error);
        console.log(error);       
      }
    },


  async createRequest (req,res){
    try{
        const {data,duracao,idCliente,idServico} = req.body;
        //busca o preço
        const buscaPrice = await Price.findOne({
            where: {
              id: idServico
            }
          })

          //busca o maior desconto
          const buscaDesconto = await Desconto.findOne(
            {order: [
                ['valor', 'DESC']] },{
            where: {
                [Op.or]: [{id: idCliente}, {active: "S"}]
              
            }
          })
          console.log(buscaDesconto);

          //calculo do valor aplicando o desconto
          //desconto 1 = valor absoluto ; 2 = porcetagem
          const total = 0;
          if(buscaPrice.tipoDesconto == 1){
           total =  buscaPrice.valor - buscaDesconto.valor
        }
        if(buscaPrice.tipoDesconto == 2){
           total = (buscaPrice.valor/100)*
                        (100-buscaDesconto.valor);    
        }

                
          res.json(buscaPrice.valor);
          console.log(buscaPrice.valor+total);

          const createPedido = await Pedidos.create({
              idCliente,data,duracao,idServico,total
          })
          
        //inativar o desconto
        
          
        //   console.log(buscaPrice[0].valor);
        //   res.json(buscaPrice[0].valor);

          

    }catch (error) {
      res.send(error);
      console.log(error);       
    }
  }

    }





