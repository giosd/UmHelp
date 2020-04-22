const {Router} = require ('express');
const priceController = require('./Controllers/listPrices')

const router = Router();

router.get('/',(request,result)=>{
    result.send('Cadastrado')
});

router.get('/Price/:id',priceController.listPrices)

module.exports = router;
