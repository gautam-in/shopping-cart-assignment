var express = require('express');
var router = express.Router();
// data calling

var itemCounter = require('./constant');


var productList = require('../resources/data/products/index.get.json');
var prodCategories = require('../resources/data/categories/index.get.json');


// for sorting in order

prodCategories.sort(function (a, b) {
    return a.order - b.order;
});




/* GET product page. */

router.get('/', function (req, res, next) {
    //console.log("products**************** ",itemCounter.item_counter);
    var productLists = productList.filter(category_list => category_list.category);
    var ActiveCategories = prodCategories.filter(category => category.enabled);
    var ActiveCategories = prodCategories.filter(category => category.enabled);
    res.render('product', {
        title: 'product',
        cat_List: ActiveCategories,
        prod_List: productLists,
        item_counter: itemCounter.item_counter
    });
});

/* GET product filter. */

router.get('/:id', function (req, res, next) {
    var categoryId = req.params.id;
    var ActiveCategories = prodCategories.filter(category => category.enabled);
    var product_cat = productList.filter(product => product.category === categoryId);
    res.render('product', {
        cat_List: ActiveCategories,
        prod_List: product_cat,
        item_counter: itemCounter.item_counter
    })
});


module.exports = router;