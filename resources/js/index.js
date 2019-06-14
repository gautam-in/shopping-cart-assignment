var express = require('express'),
    router = express.Router(),
    request = require("request"),
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
    res.render('index', {
        banners: banners,
        categories: categories
    });
});

module.exports = router;