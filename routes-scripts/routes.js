// Import frameworks
const express = require('express');
const router = express.Router();
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
    res.render('features/home/home', {
        title: "shopping cart",
        banners: banners.banners,
        categories: categories.categoryval,
        products: products.products
    });
});

router.get('/home', function(req, res, next) {
    console.log('home;')
    res.render('features/home/home', {
        title: "shopping cart",
        banners: banners.banners,
        categories: categories.categoryval,
        products: products.products
    });
});

//Login Page
router.get('/login', function(req, res) {

    res.render('features/login/login', {
        title: "shopping cart",
    });
});

//Register Page
router.get('/register', function(req, res) {
    res.render('features/register/register', {
        title: "shopping cart",
    });
});

//Product Page
router.get('/product', function(req, res, next) {
    res.render('features/product/product', {
        title: "shopping cart",
        products: products.products,
        categories: categories.categoryval
    });
});

router.get('/product/:id', function(req, res, next) {
    var categoryId = req.params.id;
    var ActiveCategories = categories.categoryval.filter(function(category) { return category.enabled });
    var product_cat = products.products.filter(function(products) { return products.category == categoryId });

    res.render('features/product/product', {
        categories: ActiveCategories,
        products: product_cat
    })
});

// Export the router

module.exports = router;