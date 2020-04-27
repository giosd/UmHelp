const { Router } = require('express');
const requestController = require('./Controllers/listPedidos')
const discountsController = require('./Controllers/descontoController')


const router = Router();

router.get('/', (request, result) => {
    result.send('Hello')
});
//lista todos os descontos
router.get('/discounts', discountsController.allDiscounts);

//cadastra um novo desconto
router.post('/discounts', discountsController.createDiscounts);

//atualiza todo um desconto passado por parametro
router.put('/discounts/:id', discountsController.putDiscounts);

//atualiza parte de um desconto passado por parametro
router.patch('/discounts/:id', discountsController.patchDiscounts);

//deleta um desconto passado por parametro
router.delete('/discounts/:id', discountsController.deleteDiscounts);

//lista o pedido passado por parametro
router.get('/request/:id', requestController.listPedido);

//gera orçamento, sem inativar um desconto e sem persistir um pedido na tabela
router.post('/request', requestController.orcamentoRequest)

//gera um pedido, inativando um desconto e persistindo um pedido na tabela
router.post('/createRequest', requestController.createRequest);

//lista todos os pedidos
router.get('/request', requestController.listAllPedidos);

//atualiza todo um pedido passado por parametro
router.put('/request/:id', requestController.putPedido);

//atualiza parte de um pedido passado por parametro
router.patch('/request/:id', requestController.patchPedido);

//deleta um pedido passado por parametro
router.delete('/request/:id', requestController.deletePedido);


module.exports = router;
