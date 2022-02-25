const express = require('express');
const categories = require('./categories/index.get.json');
const products = require('./products/index.get.json');
const addToCartMsgs = require('./addToCart/index.post.json');
const banners = require('./banners/index.get.json');

const app = express();

const port = process.env.PORT || 5000;

app.get('/categories', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(categories);
});

app.get('/banners', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(banners);
});

app.get('/products', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(products);
});

app.get('/addCartMsgs', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(addToCartMsgs);
});

app.listen(port);