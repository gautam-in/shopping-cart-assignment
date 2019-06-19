var express = require('express'),
    router = express.Router(),
    request = require("request"),
    itemCounter = require('./constant'),
    productList, productInCart = [];

request({
    url: "http://localhost:5000/products",
    json: true
}, function (error, response, result) {
    if (!error && response.statusCode === 200) {
        productList = result;
    }
});

router.get('/allitem', function (req, res) {
    res.end(JSON.stringify({ 'productInCart': productInCart, 'itemCounter': itemCounter.item_counter }));
});


router.get('/:id/:operation', function (req, res) {
    if (req.params.operation == "add") {
        productList.forEach(element => {
            if (element.id === req.params.id) {
                if (element.count == undefined) {
                    element.count = 1;
                    productInCart.push(element);
                    itemCounter.item_counter++;
                    element.totalPrice = element.price;
                } else {
                    element.count++;
                    itemCounter.item_counter++;
                    element.totalPrice = element.count * element.price;

                }
            }
        });
        res.end(JSON.stringify({ 'productInCart': productInCart, 'itemCounter': itemCounter.item_counter }));
    } else if (req.params.operation == "remove") {
        productList.forEach(element => {
            if (element.id === req.params.id) {
                element.count = element.count - 1;
                itemCounter.item_counter = itemCounter.item_counter - 1;
                element.totalPrice = element.count * element.price;
            }
        });
        res.end(JSON.stringify({ 'productInCart': productInCart, 'itemCounter': itemCounter.item_counter }));
    }
});

router.get('/', function (req, res, next) {
    res.render('cart', {
        title: 'cart',
        productList: productList,
        productInCart: productInCart,
        itemCounter: itemCounter.item_counter
    });
});

module.exports = router;