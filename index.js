const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 5000;

const products = require('./server/products/index.get.json');
const categories = require('./server/categories/index.get.json');
const banners = require('./server/banners/index.get.json');
const addToCart = require('./server/addToCart/index.post.json');

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/frontend/dist/shopping-assignment/"));
app.use(express.static(process.cwd()+"/static/"));

app.post('/api/addToCart', (req, res) => {
  res.json(addToCart);
});

app.get('/api/getProducts', (req, res) => {
  res.json(products);
});

app.get('/api/getCategories', (req, res) => {
  res.json(categories);
});

app.get('/api/getBanners', (req, res) => {
  res.json(banners);
});

app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/frontend/dist/shopping-assignment/index.html")
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});