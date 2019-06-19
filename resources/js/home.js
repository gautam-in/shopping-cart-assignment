var express = require('express'),
    router = express.Router(),
    request = require("request"),
    itemCounter = require('./constant'),
    banners, categories;

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



router.get('/', function(req, res, next) {
    res.render('home', {
        banners: banners,
        categories: categories,
        itemCounter:itemCounter.item_counter
    });
});

module.exports = router;