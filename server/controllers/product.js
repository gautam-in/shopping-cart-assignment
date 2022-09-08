const products = require('../mockjson/products/index.get.json');
const logger = require('../logger/index');

//return product list from json
const getProducts = (req,res)=>{
    logger.debug(`productCtrl: getProducts() initiate`);
    res.json(products);
}

module.exports = {getProducts}
