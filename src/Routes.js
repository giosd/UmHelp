const {Router} = require ('express');
const priceController = require('./Controllers/listPrices')

const router = Router();

router.get('/',(request,result)=>{
    result.send('Cadastrado')
});

router.post('/incPrice', priceController.incPrices)

router.get('/listPrice',priceController.listPrices)

module.exports = router;
