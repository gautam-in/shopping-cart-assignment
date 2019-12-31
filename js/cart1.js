
var express = require('express')
var router = express.Router();
var productList = require('../server/products/index.get.json');
let cart =require('./cartconstant');





router.post('/addToCart', function (req, res) {
    let id = req.body.id;
    let item =productList.find((product)=>product.id=id);
    if(item){
    	cart.addItem(item);
    }
	res.end(JSON.stringify({ 'responseMessage': "Product added to carts successfully"}));
    
});

module.exports = router;



