var express = require('express'),
    router = express.Router(),
    request = require("request"),
    prod_categories;

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

router.get('/', function(req, res, next) {
    res.render('product', {
        prod_categories: prod_categories,
        prod_list: prod_list
    });
});

module.exports = router;