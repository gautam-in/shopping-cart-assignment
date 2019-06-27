var express = require('express'),
    router = express.Router(),
    request = require("request"),
    data = require('./constant'),
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
    res.end(JSON.stringify({ 'productInCart': productInCart, 'itemCounter': data.item_counter }));
});


router.get('/:id/:operation', function (req, res) {
    if (req.params.operation == "add") {
        productList.forEach(element => {
            if (element.id === req.params.id) {
                if (element.count == undefined || element.count == 0) {
                    element.count = 1;
                    productInCart.push(element);
                    data.item_counter++;
                    element.totalPrice = element.price;
                } else {
                    element.count++;
                    data.item_counter++;
                    element.totalPrice = element.count * element.price;
                }
            }
        });
        res.send(JSON.stringify({ 'productList': productList, 'productInCart': productInCart, 'itemCounter': data.item_counter }));
    } else if (req.params.operation == "remove") {
        productList.forEach((element, index) => {
            if (element.id === req.params.id) {
                element.count = element.count - 1;
                if (element.count == 0) {
                    productInCart.splice(index, 1);
                }
                data.item_counter = data.item_counter - 1;
                element.totalPrice = element.count * element.price;
            }
        });
        res.send(JSON.stringify({ 'productList': productList, 'productInCart': productInCart, 'itemCounter': data.item_counter }));
    }
});

router.get('/', function (req, res, next) {
    res.render('cart', {
        productList: productList,
        productInCart: productInCart,
        itemCounter: data.item_counter,
        content: data.content.content
    });
});

module.exports = router;