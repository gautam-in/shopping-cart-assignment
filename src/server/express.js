var express = require('express');
var bodyParser = require("body-parser");
const fs = require('fs');
const server = express();
var products = require("../../api/products/index.get.json");
var categories = require("../../api/categories/index.get.json");


server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.post('/addtocart', function (req, res) {
    try {
        fs.writeFileSync('api/addToCart/index.post.json', JSON.stringify(req.body));
    } catch(err) {
    // An error occurred
    console.error(err);
    }
    res.end(JSON.stringify({ addtocart: 'hello'}));
});

server.get('/categories', function (req, res) {
    
    categories.sort((a, b) => {
        return a.order - b.order;
    });
    var newCat = categories.filter((item) => {
        return item.enabled;
    });
    res.end(JSON.stringify({ categories: newCat }));
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

server.get('/getcart', function (req, res) {
    let jsonData = {}
    fs.readFile('api/addToCart/index.post.json', 'utf-8', (err, data) => {
      if (err) throw err
      jsonData = JSON.parse(data);
      res.end(JSON.stringify({ data: jsonData }));
    })
});

server.listen(8080, () => {
    console.log("server is listening");
});

