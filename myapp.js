'use strict';

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _jsonConcat = require('json-concat');

var _jsonConcat2 = _interopRequireDefault(_jsonConcat);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _home = require('./resources/routes/home');

var _home2 = _interopRequireDefault(_home);

var _product = require('./resources/routes/product');

var _product2 = _interopRequireDefault(_product);

var _cart = require('./resources/routes/cart');

var _cart2 = _interopRequireDefault(_cart);

var _constant = require('./resources/routes/constant');

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

(0, _glob2.default)("./server/**/*.json", null, function (er, files) {
    if (er) {} else {
        (0, _jsonConcat2.default)({
            src: files,
            dest: "./server/db.json"
        }, function (json) {});
    };
});

app.engine('hbs', (0, _expressHandlebars2.default)({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));

/*----------------- adding static files --------------*/
app.use(_express2.default.static(__dirname + '/resources'));
/*----------------------------------------------------*/

app.use('/', _home2.default);
app.use('/product', _product2.default);
app.use('/cart', _cart2.default);

app.set('views', __dirname + '/views/');
app.set('view engine', 'hbs');

/*----------------- rendering view --------------*/

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/login', function (req, res) {
    res.render('login', {
        itemCounter: _constant2.default.item_counter,
        content: _constant2.default.content.content
    });
});

app.get('/register', function (req, res) {
    res.render('register', {
        itemCounter: _constant2.default.item_counter,
        content: _constant2.default.content.content
    });
});

app.get('/product', function (req, res) {
    res.render('product');
});

app.get('/cart', function (req, res) {
    res.render('cart');
});

/*-------------------------------------------------*/

app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});

module.exports = app;
