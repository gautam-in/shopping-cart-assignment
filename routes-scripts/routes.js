// Import frameworks
const express = require('express');
const router = express.Router();
var itemCounter = require('./constant');

const fs = require('fs');
let obj = fs.readFileSync('./server/banners/index.get.json');
let banners = JSON.parse(obj);
let obj1 = fs.readFileSync('./server/categories/index.get.json');
let categories = JSON.parse(obj1);
let productObj = fs.readFileSync('./server/products/index.get.json');
let products = JSON.parse(productObj);

var classvalue = "active";
var productList = require('../server/products/index.get.json');
var productInCart = [];
/**
 * BEGIN ROUTING
 */

// Homepage
router.get('/', function(req, res, next) {
    console.log('home;')
    res.render('home', {
        title: "shopping cart",
        banners: banners.banners,
        categories: categories.categoryval,
        products: products.products,
        item_counter: itemCounter.item_counter
    });
});

router.get('/home', function(req, res, next) {
    console.log('home;')
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

    res.render('login', {
        title: "shopping cart",
        item_counter: itemCounter.item_counter,
    });


});

//Register Page
router.get('/register', function(req, res) {
    res.render('register', {
        title: "shopping cart",
        item_counter: itemCounter.item_counter,
        success: req.session.success,
        errors: req.session.errors
    });
    req.session.errors = null;
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
        classvalue: classvalue,
        categories: ActiveCategories,
        products: product_cat,
        item_counter: itemCounter.item_counter
    })
});

// router.post('/login', function(req, res, next) {
//     //if (req.body.email == email && req.body.password == password) {
//     res.redirect('/'); // Redirect to /welcome if success
//     //} else {
//     //res.redirect('/login'); // Redirect to /login if login fail
//     //}

// });

// Handle 404 error
// NOTE this is reached if no other route above was matched
//router.get('*', (req, res) => renderNotFound(res));

// Export the router
router.get('/cart', function(req, res, next) {
    var productLists = productList.products.filter(function(category_list) { category_list.category });

    res.render('cart', {
        title: 'cart',
        prod_List: productLists,
        productInCart: productInCart,
        item_counter: itemCounter.item_counter
    });
});

router.get('/cart/allitem', function(req, res) {
    res.end(JSON.stringify({ 'cartItems': productInCart, 'item_counter': itemCounter.item_counter }));
});

router.get('/cart/:id/:operation', function(req, res) {
    if (req.params.operation == "add") {
        productList.products.forEach(function(element) {
            if (element.id === req.params.id) {
                if (element.count == undefined) {
                    element.count = 1;
                    productInCart.push(element);
                    itemCounter.item_counter++;
                    element.total_price = element.price;
                } else {
                    element.count++;
                    itemCounter.item_counter++;
                    element.total_price = element.count * element.price;

                }
            }
        });
        res.end(JSON.stringify({ 'cartItems': productInCart, 'item_counter': itemCounter.item_counter }));
    } else if (req.params.operation == "remove") {
        productList.products.forEach(function(element) {
            if (element.id === req.params.id) {
                element.count = element.count - 1;
                itemCounter.item_counter = itemCounter.item_counter - 1;
                element.total_price = element.count * element.price;
            }
        });
        res.end(JSON.stringify({ 'cartItems': productInCart, 'item_counter': itemCounter.item_counter }));
    }
});

module.exports = router;