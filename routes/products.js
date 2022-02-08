const express = require('express');
const router = express.Router();
const fs = require("fs");
const products = require("../data/products/index.json");
const categories = require("../data/categories/index.json");
const path = require('path');
// const jsonReader = require('./helper.js');
const cartData = require('../data/addToCart/cart.json');



router.get('/', function (req, res, next) {
    // console.log("###### ", data);
    // console.log('cartData ', cartData);

    res.render('products/products', { title: 'Shopping Cart', products: products, categories: categories, cartTotal: Object.keys(cartData).length, cartData: Object.values(cartData) })
})

router.get('/cart/:sku', function (req, res, next) {
    let sku = req.params.sku;
    let filterProduct = products.filter(item => item.sku === sku);

    if (!cartData[sku]) {
        cartData[sku] = filterProduct[0];
        cartData[sku]['total'] = 0;
    }


    cartData[sku]['total'] = cartData[sku]['total'] + 1;

    fs.writeFile(path.join(__dirname, "../data/addToCart/cart.json"), JSON.stringify(cartData), err => {
        if (err) console.log("Error writing file:", err);
    });
    console.log('cartData ', cartData);

    res.redirect('back');
})
router.get('/cart/:sku/:cartevent', function (req, res, next) {
    let sku = req.params.sku;
    let cartevent = req.params.cartevent;

    if (cartevent === 'increase') {
        cartData[sku]['total'] = cartData[sku]['total'] + 1;
    }
    if (cartevent === 'decrease') {
        total = cartData[sku]['total'] - 1;
        if (total === 0) {
            delete cartData[sku];
        } else {
            cartData[sku]['total'] = total;
        }
    }

    fs.writeFile(path.join(__dirname, "../data/addToCart/cart.json"), JSON.stringify(cartData), err => {
        if (err) console.log("Error writing file:", err);
    });
    res.redirect('back');
})


// router.get('/cart/:sku')
router.get('/:catkey', function (req, res, next) {
    // console.log("###### ", data);
    let catId = req.params.catkey;
    let catArr = categories.filter(item => item.key === catId);
    let catid = '';
    if (catArr.length > 0) {
        catid = catArr[0]["id"]
    }

    let filterData = products.filter(item => item.category === catid);
    console.log(filterData);
    res.render('products/products', { title: 'Shopping Cart', products: filterData, categories: categories, cartTotal: Object.keys(cartData).length, cartData: Object.values(cartData) });
});
router.post('/cartevent', function (req, res, next) {
    // console.log('req ', req);
    const { sku, cartEvent } = req.body;
    // console.log('sku', sku, cartEvent);
    if (cartEvent === 'increase') {
        cartData[sku]['total'] = cartData[sku]['total'] + 1;
    }
    if (cartEvent === 'decrease') {
        total = cartData[sku]['total'] - 1;
        if (total === 0) {
            delete cartData[sku];
        } else {
            cartData[sku]['total'] = total;
        }
    }

    fs.writeFile(path.join(__dirname, "../data/addToCart/cart.json"), JSON.stringify(cartData), err => {
        if (err) console.log("Error writing file:", err);
    });
    console.log('cartData', cartData);

    res.send(cartData);
})

module.exports = router;