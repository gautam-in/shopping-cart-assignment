var express = require('express');
var router = express.Router();

var productList = require('../server/products/index.get.json');
var productInCart = [];
var itemCounter = require('./constant');


router.get('/', function (req, res, next) {
  var productLists = productList.products.filter(function(category_list){category_list.category});

  res.render('cart', {
    title: 'cart',
    prod_List: productLists,
    productInCart: productInCart,
    item_counter: itemCounter.item_counter
  });
});

router.get('/allitem', function (req, res) {
  res.end(JSON.stringify({ 'cartItems': productInCart, 'item_counter': itemCounter.item_counter }));
});
router.get('/:id/:operation', function (req, res) {
  if (req.params.operation == "add") {
    productList.products.forEach(function(element) {
      if (element.id === req.params.id) {
        if (element.count == undefined) {
          element.count = 1;
          productInCart.push(element);
          itemCounter.item_counter++;
          element.total_price = element.price ;
        } else {
          element.count++;
          itemCounter.item_counter++;
          element.total_price = element.count * element.price;
          
        }
      }
    });
    res.end(JSON.stringify({ 'cartItems': productInCart, 'item_counter': itemCounter.item_counter }));
  } else if (req.params.operation == "remove") {
    productList.products.forEach(function(element) {
      if (element.id === req.params.id) {
        element.count = element.count - 1;
        itemCounter.item_counter = itemCounter.item_counter - 1;
        element.total_price = element.count * element.price;
      }
    });
    res.end(JSON.stringify({ 'cartItems': productInCart, 'item_counter': itemCounter.item_counter }));
  }
});
module.exports = router;