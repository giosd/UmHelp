const sequelize = require('../database/Index');
const Pedidos = require('../models/Pedido');
const Desconto = require('../models/Desconto');

module.exports = {
    //deleta um pedido pelo id
    async deletePedido(req, res) {
        try {
            const idPedido = req.params.id
            const pedido = await Pedidos.destroy({
                where: {
                    id: idPedido
                }
            });

            if (pedido > 0) {
                return res.send({
                    Message: "Pedido deletado com sucesso"
                });
            } else {
                return res.send({
                    Message: "Pedido não cadastrado"
                });
            }

        } catch (error) {
            res.send(error);
            console.log(error);

        }

    },
    //atualisa um pedido todo pelo seu id
    async putPedido(req, res) {
        try {
            const { id, data, duracao, idCliente, idServico, valor } = req.body;
            const pedido = await Pedidos.update({
                idCliente: idCliente,
                data: data,
                duracao: duracao,
                idServico: idServico,
                valor: valor,
            }, {
                where: {
                    id: req.params.id
                }
            });

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
            res.send(error);
            console.log(error);

        }

    },

    //busca o pedido pelo seu Id e atualiza os campos e valores que são passados no body.
    async patchPedido(req, res) {
        try {
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

    //lista todos os pedidos
    async listAllPedidos(req, res) {
        try {

            const buscaPedido = await Pedidos.findAll();

            return res.json(buscaPedido);

        } catch (error) {
            res.send(error);
            console.log(error);
        }
    },
    //lista o pedido passado por parametro
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

    //cadastra um pedido
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

            if (buscaDescontoAbsoluto == null && buscaDescontoPorcentagem == null) {
                var total = buscaPrice;
                var idDesconto = 0;

            } else {
                if (buscaDescontoPorcentagem == null) {
                    var totalAbsoluto = buscaPrice - buscaDescontoAbsoluto.valor;
                    var idDesconto = buscaDescontoAbsoluto.id;
                } else {
                    var totalPorcentagem = (buscaPrice / 100) *
                        (100 - buscaDescontoPorcentagem.valor);
                    var idDesconto = buscaDescontoPorcentagem;
                }

                if ((totalAbsoluto) > (totalPorcentagem)) {
                    var total = totalPorcentagem
                } else {
                    var total = totalAbsoluto
                }

                if (total < 0) { total = 0 }
            }
            const createPedido = await Pedidos.create({
                idCliente, data, duracao, idServico, valor: total
            })

            //inativar o desconto
            if (idDesconto > 0) { }
            const inativaDesconto = await Desconto.update({
                active: 'N',
            }, {
                where: {
                    id: idDesconto
                }
            });


            res.json(createPedido);

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

            if (buscaDescontoAbsoluto == null && buscaDescontoPorcentagem == null) {
                var total = buscaPrice;

            } else {
                if (buscaDescontoPorcentagem == null) {
                    var totalAbsoluto = buscaPrice - buscaDescontoAbsoluto.valor;

                } else {
                    var totalPorcentagem = (buscaPrice / 100) *
                        (100 - buscaDescontoPorcentagem.valor);
                }

                if ((totalAbsoluto) > (totalPorcentagem)) {
                    var total = totalPorcentagem
                } else {
                    var total = totalAbsoluto
                }

                if (total < 0) { total = 0 }
            }


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





