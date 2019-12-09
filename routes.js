// Import frameworks
const express = require('express');
const router = express.Router();
var itemCounter = require('./routes-scripts/constant');
const fs = require('fs');
let obj = fs.readFileSync('./server/banners/index.get.json');
let banners = JSON.parse(obj);
let obj1 = fs.readFileSync('./server/categories/index.get.json');
let categories = JSON.parse(obj1);
let productObj = fs.readFileSync('./server/products/index.get.json');
let products = JSON.parse(productObj);

/**
 * BEGIN ROUTING
 */

// Homepage
router.get('/', function(req, res, next) {
    res.render('home', {
        title: "shopping cart",
        banners: banners.banners,
        categories: categories.categoryval,
        products: products.products,
        item_counter: itemCounter.item_counter
    });
});

//Login Page
router.get('/login', function(req, res) {
    res.render('login', { title: "shopping cart" });
});

//Register Page
router.get('/register', function(req, res) {
    res.render('register', { title: "shopping cart" });
});

//Product Page
router.get('/product', function(req, res, next) {
    res.render('product', {
        title: "shopping cart",
        products: products.products,
        categories: categories.categoryval,
        item_counter: itemCounter.item_counter
    });
});

router.get('/product/:id', function(req, res, next) {
    console.log(req.params.id);
    var categoryId = req.params.id;

    var ActiveCategories = categories.categoryval.filter(function(category) { return category.enabled });
    var product_cat = products.products.filter(function(products) { return products.category == categoryId });
    console.log(product_cat);
    res.render('product', {
        classvalue: "active",
        categories: ActiveCategories,
        products: product_cat,
        item_counter: itemCounter.item_counter
    })
});

// Handle 404 error
// NOTE this is reached if no other route above was matched
//router.get('*', (req, res) => renderNotFound(res));

// Export the router
module.exports = router;