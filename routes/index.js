var express = require('express');
var router = express.Router();
var banners = require('../resources/data/banners/index.get.json');
var prodCategories = require('../resources/data/categories/index.get.json');

var prodHbs = require('../resources/data/products/index.get.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    ActiveBanners = banners.filter(banner => banner.isActive);
    ActiveCategories = prodCategories.filter(category => category.enabled);
    res.render('index', {
        banners: ActiveBanners,
        categories: ActiveCategories
    });
});

router.get('/product', function(req, res, next) {
    ActiveCategories = prodCategories.filter(category => category.enabled);
    res.render('product', {
        prodHbs: prodHbs,
        categories: ActiveCategories
    });
});

router.get('/product/:id', function(req, res, next) {
    var catId = req.params.id;
    ActiveCategories = prodCategories.filter(category => category.enabled);
    prodHbs1 = prodHbs.filter(prod => prod.category === catId);
    res.render('product', {
        prodHbs: prodHbs1,
        categories: ActiveCategories
    });
});

router.get('/login', function(req, res, next) {
    res.render('login.hbs', {
        title: 'Express'
    });
});

router.get('/register', function(req, res, next) {
    res.render('register.hbs', {
        title: 'Express'
    });
});

module.exports = router;