const sequelize = require('../database/Index');
const Pedidos = require('../models/Pedido');
const Desconto = require('../models/Desconto');

module.exports = {

    async deletePedido(req, res) {
        try {
            const idPedido = req.params.id
            const pedido = await Pedidos.destroy({
                where: {
                    id: idPedido
                }
            });

            return res.json(pedido);

        } catch (error) {
            res.send(error);
            console.log(error);

        }

    },

    async putPedido(req, res) {
        try {
            const { id, data, duracao, idCliente, idServico, valor } = req.body;
            const user = await Pedidos.update({
                idCliente: idCliente,
                data: data,
                duracao: duracao,
                idServico: idServico,
                valor: valor,
            }, {
                where: {
                    id: id
                }
            });

            return res.json(user);

        } catch (error) {
            res.send(error);
            console.log(error);

        }

    },

    async patchPedido(req, res) {
        try {
            //busca o usuário pelo seu Id e atualiza os campos e valores que são passados no body.
            const pedido = await Pedidos.update(req.body, {
                where: { id: req.params.id }
            })
            if (pedido > 0) {
                return res.send({
                    Message: "Pedido alterado com sucesso"
                });
            } else {
                return res.send({
                    Message: "Pedido não cadastrado"
                });
            }
        } catch (error) {
            return res.send(error)
        }

    },

    async listAllPedidos(req, res) {
        try {

            const buscaPedido = await Pedidos.findAll();

            return res.json(buscaPedido);

        } catch (error) {
            res.send(error);
            console.log(error);
        }
    },

    async listPedido(req, res) {
        try {

            const idPedido = req.params.id
            const buscaPedido = await Pedidos.findByPk(idPedido)

            return res.json(buscaPedido);

        } catch (error) {
            res.send(error);
            console.log(error);
        }
    },


    async createRequest(req, res) {
        try {
            const { data, duracao, idCliente, idServico } = req.body;
            //busca o preço
            const buscaPrice = 50 * Number(duracao);

            //busca o maior desconto

            const buscaDescontoPorcentagem = await Desconto.findOne(

                {
                    where: {
                        idCliente: idCliente,
                        active: 'S',
                        tipoDesconto: 2
                    }
                }, {
                order: [['valor', 'DESC']]
            })

            const buscaDescontoAbsoluto = await Desconto.findOne(

                {
                    where: {
                        idCliente: idCliente,
                        active: 'S',
                        tipoDesconto: 1
                    }
                }, {
                order: [['valor', 'DESC']]
            })

            //calculo do valor aplicando o desconto
            //desconto 1 = valor absoluto ; 2 = porcetagem


            var totalAbsoluto = buscaPrice - buscaDescontoAbsoluto.valor;


            var totalPorcentagem = (buscaPrice / 100) *
                (100 - buscaDescontoPorcentagem.valor);

            if ((totalAbsoluto) > (totalPorcentagem)) {
                var total = totalPorcentagem
            } else {
                var total = totalAbsoluto
            }

            if (total < 0) { total = 0 }

            const createPedido = await Pedidos.create({
                idCliente, data, duracao, idServico, valor: total
            })

            //inativar o desconto
            const inativaDesconto = await Desconto.update({
                active: 'N',
            }, {
                where: {
                    id: buscaDesconto.id
                }
            });


            res.send(createPedido);

        } catch (error) {
            res.send(error);
            console.log(error);
        }
    },
    //orçamento
    async orcamentoRequest(req, res) {
        try {
            const { data, duracao, idCliente, idServico } = req.body;
            //busca o preço
            const buscaPrice = 50 * Number(duracao);

            //busca o maior desconto

            const buscaDescontoPorcentagem = await Desconto.findOne(

                {
                    where: {
                        idCliente: idCliente,
                        active: 'S',
                        tipoDesconto: 2
                    }
                }, {
                order: [['valor', 'DESC']]
            })

            const buscaDescontoAbsoluto = await Desconto.findOne(

                {
                    where: {
                        idCliente: idCliente,
                        active: 'S',
                        tipoDesconto: 1
                    }
                }, {
                order: [['valor', 'DESC']]
            })

            //calculo do valor aplicando o desconto
            //desconto 1 = valor absoluto ; 2 = porcetagem


            var totalAbsoluto = buscaPrice - buscaDescontoAbsoluto.valor;


            var totalPorcentagem = (buscaPrice / 100) *
                (100 - buscaDescontoPorcentagem.valor);

            if ((totalAbsoluto) > (totalPorcentagem)) {
                var total = totalPorcentagem
            } else {
                var total = totalAbsoluto
            }

            if (total < 0) { total = 0 }


            const createPedido = ({
                idCliente, data, duracao, idServico, total
            })


            res.send(createPedido);

        } catch (error) {
            res.send(error);
            console.log(error);
        }
    }

}





