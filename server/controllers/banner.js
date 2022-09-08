const banners = require('../mockjson/banners/index.get.json');
const logger = require('../logger/index');

//return banner list from json
const getBanners = (req,res)=>{
    logger.debug(`bannerCtrl: getBanner() initiate`);
    res.json(banners);
}

module.exports = {getBanners}