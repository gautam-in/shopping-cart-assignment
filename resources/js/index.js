var express = require('express'),
    router = express.Router(),
    request = require("request"),
    banners, categories, productInCart = [];

request({
    url: "http://localhost:5000/banners",
    json: true
}, function(error, response, result) {
    if (!error && response.statusCode === 200) {
        banners = result;
    }
});

request({
    url: "http://localhost:5000/categories",
    json: true
}, function(error, response, result) {
    if (!error && response.statusCode === 200) {
        categories = result;
    }
});

router.get('/:id/:operation', function(req, res) {
    if (req.params.operation == "add") {
        prod_list.forEach(element => {
            if (element.id === req.params.id) {
                if (element.count == undefined) {
                    element.count = 1;
                    productInCart.push(element);
                    //itemCounter.item_counter++;
                    element.total_price = element.price;
                } else {
                    element.count++;
                    //itemCounter.item_counter++;
                    element.total_price = element.count * element.price;

                }
            }
        });
        res.end(JSON.stringify({ 'productInCart': productInCart }));
        console.log(productInCart);
    } else if (req.params.operation == "remove") {
        prod_list.forEach(element => {
            if (element.id === req.params.id) {
                element.count = element.count - 1;
                //itemCounter.item_counter = itemCounter.item_counter - 1;
                element.total_price = element.count * element.price;
            }
        });
        res.end(JSON.stringify({ 'productInCart': productInCart }));
        console.log(productInCart);
    }
});


router.get('/', function(req, res, next) {
    res.render('index', {
        banners: banners,
        categories: categories,
        productInCart: productInCart
    });
});

module.exports = router;