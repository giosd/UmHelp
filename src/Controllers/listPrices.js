const sequelize = require('../database/Index');
const Price = require('../models/Price');

module.exports = {

  //busca o serviço pelo seu Id e atualiza os campos e valores que são passados no body.
  async patchPrice(req, res) {
    try {
      const price = await Price.update(req.body, {
        where: { id: req.params.id }
      })

      if (price > 0) {
        return res.send({
          Message: "Serviço alterado com sucesso"
        });
      } else {
        return res.send({
          Message: "Serviço não cadastrado"
        });
      }
    } catch (error) {
      return res.send(error)
    }

  },

  // deleta o serviço
  async deletePrice(req, res) {
    try {
      const idPrice = req.params.id
      const price = await Price.destroy({
        where: {
          id: idPrice
        }
      });

      return res.json(price);

    } catch (error) {
      res.send(error);
      console.log(error);

    }

  },
  //atualiza todos os campos do serviço
  async putPrice(req, res) {
    try {
      const { id, servico, valor } = req.body;
      const putPrice = await Price.update({
        id: id,
        servico: servico,
        valor: valor

      }, {
        where: {
          id: id
        }
      })

      return res.json(putPrice);
    } catch (error) {
      res.send(error);
      console.log(error);
    }

  },
  //busca o serviço pelo id
  async idPrice(req, res) {
    try {
      const id = req.params.id;
      const busca = await Price.findAll({
        where: {
          id: id
        }
      });

      return res.json(busca);

    } catch (error) {
      res.send(error);
      console.log(error);
    }
  },
  // busca todos os serviços
  async listPrices(req, res) {
    try {

      const price = await Price.findAll();

      return res.json(price);
    } catch (error) {
      res.send(error);
      console.log(error);
    }

  },
  //inclui serviços
  async incPrices(req, res) {

    try {
      const { servico, valor } = req.body;

      const price = await Price.create({ servico, valor });

      return res.json(price);


    } catch (error) {
      res.send(error);
      console.log(error);
    }
  }

}





