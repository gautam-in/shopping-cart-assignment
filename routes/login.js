var express = require('express');
var router = express.Router();
var itemCounter = require('./constant');

var loginLabel = require('../resources/data/label/login.get.json');


/* GET login page. */

router.get('/', function (req, res, next) {
    res.render('login', {
        title: 'login',
        item_counter: itemCounter.item_counter,
        loginLabel
    });
});


module.exports = router;