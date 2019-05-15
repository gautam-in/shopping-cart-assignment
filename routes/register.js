
var express = require('express');
var router = express.Router();
var itemCounter = require('./constant');

//var counter = 0;

var registerLabel = require('../resources/data/label/register.get.json');

/* GET register page. */

router.get('/', function (req, res, next) {
    res.render('register', {
        title: 'register',
        item_counter: itemCounter.item_counter,
        registerLabel
    });
});

module.exports = router;