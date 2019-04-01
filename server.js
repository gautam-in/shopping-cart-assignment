// load the things we need
const express = require('express');
const app = express();
const path = require('path');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/resources/views'));

// using resource route to serve static asserts from resources folder
app.use('/resources', express.static('resources'));

// use res.render to load up an ejs view file
// index page
app.get('/', function(_, res) {
  res.render('pages/index', require('./data/signUp'));
});

app.get('/signin', function(_, res) {
  res.render('pages/index', require('./data/signIn'));
});

app.get('/home', function(_, res) {
  res.render('pages/home', {
    categories: require('./data/categories').filter(val => val.imageUrl)
  });
});

// about page
app.get('/products/:key?', function(req, res) {
  let key = req.params.key;
  let categories = require('./data/categories');
  let products = require('./data/products');
  let category = categories.find(val => val.key === key);
  let categoryId = category && category.id;
  if (categoryId) {
    products = products.filter(val => val.category === categoryId);
  }
  res.render('pages/products', {
    categories: require('./data/categories'),
    products
  });
});

app.listen(8080, () => console.log('8080 is the magic port'));
