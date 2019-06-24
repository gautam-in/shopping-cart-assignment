var express = require('express'),
    router = express.Router(),
    request = require("request"),
    data = require('./constant'),
    prodCategories, productList;

request({
    url: "http://localhost:5000/categories",
    json: true
}, function (error, response, result) {
    if (!error && response.statusCode === 200) {
        prodCategories = result;
    }
});

request({
    url: "http://localhost:5000/products",
    json: true
}, function (error, response, result) {
    if (!error && response.statusCode === 200) {
        productList = result;
    }
});

router.get('/:id', function (req, res, next) {
    var categoryId = req.params.id;
    var ActiveCategories = prodCategories.filter(category => category.enabled);
    var productCat = productList.filter(product => product.category === categoryId);
    res.render('product', {
        prodCategories: ActiveCategories,
        productList: productCat,
        itemCounter: data.item_counter,
        content: data.content.content
    })
});

router.get('/', function (req, res, next) {
    res.render('product', {
        prodCategories: prodCategories,
        productList: productList,
        itemCounter: data.item_counter,
        content: data.content.content
    });
});

module.exports = router;