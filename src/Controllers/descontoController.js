const sequelize = require('../database/Index');
const Descontos = require('../models/Desconto');

module.exports = {

    async patchDiscounts(req, res) {
        try {
            //busca o usuário pelo seu Id e atualiza os campos e valores que são passados no body.
            const desconto = await Descontos.update(req.body, {
                where: { id: req.params.id }
            })

            if (desconto > 0) {
                return res.send({
                    Message: "Desconto alterado com sucesso"
                });
            } else {
                return res.send({
                    Message: "Desconto não cadastrado"
                });
            }
        } catch (error) {
            return res.send(error)
        }
    },

    async allDiscounts(req, res) {
        try {
            const descontos = await Descontos.findAll();
            return res.send(descontos);
        } catch (error) {
            return res.send(error);
        }

    },

    async deleteDiscounts(req, res) {
        try {
            const idDesconto = req.params.id
            const desconto = await Descontos.destroy({
                where: {
                    id: idDesconto
                }
            });

            return res.json(desconto);

        } catch (error) {
            res.send(error);
            console.log(error);

        }

    },

    async createDiscounts(req, res) {
        try {
            const { tipoDesconto, valor, idCliente } = req.body;
            const discounts = await Descontos.create({ tipoDesconto, valor, idCliente });

            res.json(discounts);

        } catch (error) {
            res.send(error);
            console.log(error);
        }
    }
    ,
    async putDiscounts(req, res) {

        try {
            const { id, tipoDesconto, valor, idCliente, active } = req.body;
            const discounts = await Descontos.update({
                id: id,
                tipoDesconto: tipoDesconto,
                valor: valor,
                idCliente: idCliente,
                active: active
            }, {
                where: {
                    id: id
                }
            })
            return res.json(discounts);
        } catch (error) {
            res.send(error);
            console.log(error);

        }
    }
}






