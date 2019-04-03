// load the things we need
const express = require('express');
const app = express();
const path = require('path');

// data for the views
const categories = require('./data/categories');
const products = require('./data/products');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/resources/views'));

// using resource route to serve static asserts from resources folder
app.use('/resources', express.static('resources'));

// use res.render to load up an ejs view file

app.get('/', function(_, res) {
  res.render('pages/index', require('./data/signUp'));
});

app.get('/signin', function(_, res) {
  res.render('pages/index', require('./data/signIn'));
});

app.get('/home', function(_, res) {
  res.render('pages/home', {
    categories: categories.filter(val => val.imageUrl)
  });
});

app.get('/products/:key?', function(req, res) {
  const key = req.params.key;
  const category = categories.find(val => val.key === key);
  const categoryId = category && category.id;
  let productsData;
  if (categoryId) {
    productsData = products.filter(val => val.category === categoryId);
  }
  res.render('pages/products', {
    categories,
    products: productsData,
    categoryId
  });
});

app.listen(8080, () => console.log('8080 is the magic port'));
