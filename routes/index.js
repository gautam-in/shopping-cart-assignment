var express = require('express');
var router = express.Router();
var itemCounter = require('./constant');




var productInCart = [];



var slides = require('../resources/data/banners/index.get.json');
var productList = require('../resources/data/products/index.get.json');
var prodCategories = require('../resources/data/categories/index.get.json');


// home

router.get('/', function (req, res, next) {
  // console.log("index**************** ",itemCounter.item_counter);
  var ActiveBanners = slides.filter(slide => slide.isActive);
  var ActiveCategories = prodCategories.filter(category => category.enabled);
  res.render('index', {
      slides: ActiveBanners,
      categories: ActiveCategories,
      item_counter: itemCounter.item_counter
  });

});





module.exports = router;
