const sequelize = require('../Connection');
module.exports = {
     listPrices (request,result){
       const id = request.params.id;
       //const sum = 20;
       //if(id >10){
       //    console.log("Muito altoo")
       //}else{
       //    console.log('Muito baixoo')
       //}
        const total = 10 + Number(id);
        console.log(total);
       // result.send(`Minha idade é :${id}`)
    }
}


