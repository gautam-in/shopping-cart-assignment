var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');

var cartResponse = require("./server/addToCart/index.post.json");
var bannersResponse = require("./server/banners/index.get.json");
var categoriesResponse = require("./server/categories/index.get.json");
var productsResponse = require("./server/products/index.get.json");

var app = express();

const port = 3000;

app.use(cors());

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular Static Files
app.use(express.static(path.join(__dirname, 'dist')));


// APIs
app.post('/api/addToCart', function (req, res) {
  res.send(cartResponse)
})

app.get('/api/banners', function (req, res) {
  res.send(bannersResponse)
})

app.get('/api/categories', function (req, res) {
  res.send(categoriesResponse)
})

app.get('/api/products', function (req, res) {
  res.send(productsResponse)
})

app.listen(port, () => {
  console.log('Server started at port: ' + port);
});
