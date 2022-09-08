const categories = require('../mockjson/categories/index.get.json');
const logger = require('../logger/index');

//return category list from json
const getCategories = (req,res)=>{
    logger.debug(`categoriesCtrl: getCategories() initiate`);
    res.json(categories);
}

module.exports = {getCategories}

