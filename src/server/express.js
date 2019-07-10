var express = require('express');

const server = express();
var bodyParser = require('body-parser');
var products = require("../../api/products/index.get.json");
var addtocart = require("../../api/addToCart/index.post.json");
var categories = require("../../api/categories/index.get.json");


server.use('/', function (req, res, next) {
    next();
});

server.get('/addtocart', function (req, res) {
    res.end(JSON.stringify({ addtocart: addtocart }));
});

server.get('/categories', function (req, res) {
    
    categories.sort((a, b) => {
        return a.order - b.order;
    });
    var new_cat = categories.filter((item) => {
        return item.enabled;
    });
    res.end(JSON.stringify({ categories: new_cat }));
});

server.get('/banners', function (req, res) {
    var banners = require("../../api/banners/index.get.json");
    res.end(JSON.stringify({ banners: banners }));
});

server.get('/products', function (req, res) {
    var products = require("../../api/products/index.get.json");
    if (req.query.id === "undefined") {
        res.end(JSON.stringify({ products: products }));
    } else {
        var filteredProduct = products.filter((p) => p.category == req.query.id);
        res.end(JSON.stringify({ products: filteredProduct }));
    }
});

server.get('/addTocart/:id', function (req, res) {
    var products = require("../../api/products/index.get.json");
    res.end(JSON.stringify({ id: req.params.id }));
});

server.listen(8080, () => {
    console.log("server is listening");
});

