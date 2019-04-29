var express = require('express');
var router = express.Router();
/* GET home page. */
var slides = require('../public/data/banners/index.get.json');


router.get('/', function (req, res, next) {
    var ActiveBanners = slides.filter(slide => slide.isActive);
    var ActiveCategories = prodCategories.filter(category => category.enabled);
    res.render('index', {
        slides: ActiveBanners,
        categories: ActiveCategories,
        counter: counter
    });

});



module.exports = router;