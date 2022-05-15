const express = require('express');
const router = express.Router();
// const data = require("../data/products/index.json");
const categories = require("../data/categories/index.json");
const banners = require("../data/banners/index.json");
const cartData = require('../data/addToCart/cart.json');

router.get('/', function (req, res, next) {
    // console.log("###### ", data);
    res.render('home/home', { title: 'Shopping Cart', categories: categories, banners: banners,cartTotal: Object.keys(cartData).length, cartData: Object.values(cartData) })
})
module.exports = router;