const express = require('express');
const router = express.Router();
const cartData = require('../data/addToCart/cart.json');

router.get('/', function (req, res, next) {
    console.log("###### ", "registration");
    // console.log('cartData ', cartData);

    res.render('registration/registration',{cartTotal: Object.keys(cartData).length, cartData: Object.values(cartData)});
})
router.post('/submit', function (req, res, next) {
    console.log("###### ", "registration");
    // console.log('cartData ', cartData);
    res.redirect('/');
    // res.render('registration/registration',{cartTotal: Object.keys(cartData).length, cartData: Object.values(cartData)});
})
module.exports = router;