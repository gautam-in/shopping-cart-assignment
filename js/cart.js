
var express = require('express')
var router = express.Router();
var productList = require('../server/products/index.get.json');
let cart =require('./cartconstant');
// define the home page route
router.get('/', function (req, res) {
   res.render('cart',{cartItems:cart.cartItems})
    
});
// define the home page route
router.post('/addToCart', function (req, res) {
    let id = req.body.id;
    let item =productList.find((product)=>product.id=id);
    if(item){
    	cart.addItem(item);
    }
	res.end(JSON.stringify({ 'responseMessage': "Product added to carts successfully"}));
    
});
router.get('/all', function (req, res) {
	res.end(JSON.stringify({ 'data': productList}));
    
});

module.exports = router;



