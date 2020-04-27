const { Router } = require('express');
const priceController = require('./Controllers/listPrices')
const requestController = require('./Controllers/listPedidos')
const discountsController = require('./Controllers/descontoController')


const router = Router();

router.get('/', (request, result) => {
    result.send('Cadastrado')
});

router.get('/discounts', discountsController.allDiscounts);

router.post('/discounts', discountsController.createDiscounts);

router.put('/discounts', discountsController.putDiscounts);

router.patch('/discounts/:id', discountsController.patchDiscounts);

router.delete('/discounts/:id', discountsController.deleteDiscounts);

router.get('/request/:id', requestController.listPedido);

router.patch('/price/:id', priceController.patchPrice);

router.post('/request', requestController.orcamentoRequest)

router.post('/createRequest', requestController.createRequest);

router.get('/request', requestController.listAllPedidos);

router.put('/request', requestController.putPedido);

router.patch('/request/:id', requestController.patchPedido);

router.delete('/request/:id', requestController.deletePedido);

[

]

//

router.post('/incPrice', priceController.incPrices)

router.get('/listPrice', priceController.listPrices)

router.put('/Price', priceController.putPrice);

router.delete('/Price/:id', priceController.deletePrice)

//




module.exports = router;
