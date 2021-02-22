var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');
var productRouter = require('./routes/products');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var cartRouter = require('./routes/cart');

var app = express();
var hbs = require('hbs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, './views/partials'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/product-listing', productRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/cart', cartRouter);

module.exports = app;

