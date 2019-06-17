var express = require('express'),
    router = express.Router(),
    request = require("request"),
    prod_categories, prod_list, productInCart = [];

request({
    url: "http://localhost:5000/categories",
    json: true
}, function(error, response, result) {
    if (!error && response.statusCode === 200) {
        prod_categories = result;
    }
});

request({
    url: "http://localhost:5000/products",
    json: true
}, function(error, response, result) {
    if (!error && response.statusCode === 200) {
        prod_list = result;
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
        console.log(productInCart);
        res.end(JSON.stringify({ 'productInCart': productInCart }));
    } else if (req.params.operation == "remove") {
        prod_list.forEach(element => {
            if (element.id === req.params.id) {
                element.count = element.count - 1;
                //itemCounter.item_counter = itemCounter.item_counter - 1;
                element.total_price = element.count * element.price;
            }
        });
        console.log(productInCart);
        res.end(JSON.stringify({ 'productInCart': productInCart }));
    }
});


router.get('/', function(req, res, next) {
    res.render('product', {
        prod_categories: prod_categories,
        prod_list: prod_list,
        productInCart: productInCart
    });
});

module.exports = router;