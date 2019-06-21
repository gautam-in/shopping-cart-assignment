var express = require('express'),
    router = express.Router(),
    request = require("request"),
    itemCounter = require('./constant'),
    content = require('./main'),
    banners, categories;

request({
    url: "http://localhost:5000/banners",
    json: true
}, function (error, response, result) {
    if (!error && response.statusCode === 200) {
        banners = result;
    }
});

request({
    url: "http://localhost:5000/categories",
    json: true
}, function (error, response, result) {
    if (!error && response.statusCode === 200) {
        categories = result;
    }
});

request({
    url: "http://localhost:5000/content",
    json: true
}, function (error, response, result) {
    if (!error && response.statusCode === 200) {
        content = result;
    }
});

router.get('/', function (req, res, next) {
    res.render('home', {
        banners: banners,
        categories: categories,
        itemCounter: itemCounter.item_counter,
        name: content.name
    });
    console.log(content.name);
});

module.exports = router;