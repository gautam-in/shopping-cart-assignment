let express = require('express');
let router = express.Router();
const banners = require('../public/data/banners/index.get.json');
const prodCategories = require('../public/data/categories/index.get.json');
const totalCounter = require('./data/constant');
const commonContent = require('./data/strings');

/* GET home page. */
router.get('/', function(req, res, next) {
  ActiveBanners = banners.filter(banner => banner.isActive);
  ActiveCategory = prodCategories.filter(category => category.enabled);
  prodCategories.sort((a, b)=>{return a.order - b.order}); 
  res.render('index', 
  {
    banners:ActiveBanners,
    categories:ActiveCategory,
    totalCounter:totalCounter.total_item_count, 
    footerContent: commonContent.footer.Copyright,
    menuHome : commonContent.header.Home_Menu,
    menuProduct : commonContent.header.Product_Menu,
    menuLogin : commonContent.header.Login_Menu,
    menuRegister : commonContent.header.Register_Menu,
    cartItem : commonContent.header.Cart_Item
  });  
});

module.exports = router;
