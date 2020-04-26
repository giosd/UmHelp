const {Router} = require ('express');
const priceController = require('./Controllers/listPrices')
const requestController = require('./Controllers/listPedidos')
const discountsController = require('./Controllers/descontoController')


const router = Router();

router.get('/',(request,result)=>{
    result.send('Cadastrado')
});

router.post('/incPrice', priceController.incPrices)

router.get('/listPrice',priceController.listPrices)

router.get('/idPrice/:id',priceController.idPrice)

router.post('/request',requestController.createRequest)

//

router.post('/discounts',discountsController.createDiscounts)


router.get('/price/:id',requestController.listPedido);

module.exports = router;
