let express = require('express');
let router = express.Router();
let prodListing = require('../public/data/products/index.get.json');
let prodCategories = require('../public/data/categories/index.get.json');
let totalCounter = require('./data/constant');
let commonContent = require('./data/strings');

/* GET product listing. */
router.get('/', function(req, res, next){    
    ActiveCategories = prodCategories.filter(category => category.enabled);
    res.render('product-listing', 
    {
        products:prodListing,
        categories:ActiveCategories,
        totalCounter:totalCounter.total_item_count, 
        footerContent: commonContent.footer.Copyright, 
        buyButton: commonContent.product.Buy_Button,
        mrpProd: commonContent.product.MRP,
        menuHome : commonContent.header.Home_Menu,
        menuProduct : commonContent.header.Product_Menu,
        menuLogin : commonContent.header.Login_Menu,
        menuRegister : commonContent.header.Register_Menu,
        cartItem : commonContent.header.Cart_Item
    });
})

/* GET category listing. */
router.get('/:id', function(req, res, next){
    let CatId = req.params.id;
    CategoryProducts = prodListing.filter(product => product.category==CatId);
    ActiveCategories = prodCategories.filter(category => category.enabled);
    res.render('product-listing', 
    {
        products:CategoryProducts,
        categories:ActiveCategories,
        totalCounter:totalCounter.total_item_count,
        footerContent: commonContent.footer.Copyright, 
        prodContent: commonContent.product.Buy_Button,
        mrpProd: commonContent.product.MRP,
        menuHome : commonContent.header.Home_Menu,
        menuProduct : commonContent.header.Product_Menu,
        menuLogin : commonContent.header.Login_Menu,
        menuRegister : commonContent.header.Register_Menu,
        cartItem : commonContent.header.Cart_Item
    });
})

module.exports = router;