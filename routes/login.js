const express = require('express');
const router = express.Router();
const cartData = require('../data/addToCart/cart.json');

router.get('/', function (req, res, next) {
    res.render('login/login',{cartTotal: Object.keys(cartData).length, cartData: Object.values(cartData)});
})

router.post('/submit', function (req, res, next) {
    console.log(req.body);
    res.redirect('/');
})
module.exports = router;