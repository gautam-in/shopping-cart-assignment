var express = require('express');
var router = express.Router();

// data calling

var slides = require('../public/data/banners/index.get.json');
var productList = require('../public/data/products/index.get.json');
var prodCategories = require('../public/data/categories/index.get.json');


// for sorting in order

prodCategories.sort(function(a, b){
  return a.order - b.order;
});


var cart_item = {
  items: [],
  count: 0
}
/* GET home page. */

router.get('/', function (req, res, next) {
  var ActiveBanners = slides.filter(slide => slide.isActive);
  var ActiveCategories = prodCategories.filter(category => category.enabled);
  res.render('index', {
    slides: ActiveBanners,
    categories: ActiveCategories,
    cart_item
  });

});

/* GET product page. */

router.get('/product', function (req, res, next) {
  var productLists = productList.filter(category_list => category_list.category);
  var ActiveCategories = prodCategories.filter(category => category.enabled);
  
  var ActiveCategories = prodCategories.filter(category => category.enabled);
  res.render('product', {
    title: 'product',
    cat_List: ActiveCategories,
    prod_List: productLists,
  });
});

/* GET product filter. */

router.get('/product/:id', function (req, res, next) {
  var categoryId = req.params.id;

  var ActiveCategories = prodCategories.filter(category => category.enabled);
  var product_cat = productList.filter(product => product.category === categoryId);
  res.render('product', {
    cat_List: ActiveCategories,
    prod_List: product_cat,
  })


});

/* GET login page. */

router.get('/login', function (req, res, next) {
  res.render('login', {
    title: 'login',
  });
});


/* GET register page. */

router.get('/register', function (req, res, next) {
  res.render('register', {
    title: 'register',
  });
});

/* GET cart page. */

router.get('/cart', function (req, res, next) {
  res.render('cart', {
    title: 'cart',
  });
});





module.exports = router;
