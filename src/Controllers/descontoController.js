const sequelize = require('../database/Index');
const Descontos = require('../models/Desconto');

module.exports = {
    //busca o desconto pelo seu Id e atualiza os campos e valores que são passados no body.
    async patchDiscounts(req, res) {
        try {
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
    //bussca todos os descontos
    async allDiscounts(req, res) {
        try {
            const descontos = await Descontos.findAll();
            return res.send(descontos);
        } catch (error) {
            return res.send(error);
        }

    },
    //deleta o desconto passado por parametro
    async deleteDiscounts(req, res) {
        try {
            const idDesconto = req.params.id
            const desconto = await Descontos.destroy({
                where: {
                    id: idDesconto
                }
            });

            if (desconto > 0) {
                return res.send({
                    Message: "Desconto deletado com sucesso"
                });
            } else {
                return res.send({
                    Message: "Desconto não cadastrado"
                });
            }

        } catch (error) {
            res.send(error);
            console.log(error);

        }

    },
    //cadastra um novo desconto
    async createDiscounts(req, res) {
        try {
            const { tipoDesconto, valor, idCliente } = req.body;
            const discounts = await Descontos.create({ tipoDesconto, valor, idCliente });

            res.json(discounts);

        } catch (error) {
            res.send(error);
            console.log(error);
        }
    },
    //atualisa um desconto todo pelo seu id
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
                    id: req.params.id
                }
            })
            if (discounts > 0) {
                return res.send({
                    Message: "Desconto alterado com sucesso"
                });
            } else {
                return res.send({
                    Message: "Desconto não cadastrado"
                });
            }
        } catch (error) {
            res.send(error);
            console.log(error);

        }
    }
}






