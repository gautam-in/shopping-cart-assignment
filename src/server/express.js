import express from "express";
import path from "path";

const server = express();
const webpack = require("webpack");
const config = require("../../config/webpack.dev.js");
const compiler = webpack(config);

var bodyParser = require('body-parser');
var products = require("../../json/products/index.get.json");
var addtocart = require("../../json/addToCart/index.post.json");
var categories = require("../../json/categories/index.get.json");

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
server.use(bodyParser.json());

const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
);

const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

const staticMiddleware = express.static("dist");

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);
server.use(staticMiddleware);

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
    var banners = require("../../json/banners/index.get.json");
    res.end(JSON.stringify({ banners: banners }));
});

server.get('/products', function (req, res) {
    var products = require("../../json/products/index.get.json");
    if (typeof req.query.id === "undefined") {
        res.end(JSON.stringify({ products: products }));
    } else {
        var filteredProduct = products.filter((p) => p.category == req.query.id);
        res.end(JSON.stringify({ products: filteredProduct }));
    }
});

server.get('/addTocart/:id', function (req, res) {
    var products = require("../../json/products/index.get.json");
    res.end(JSON.stringify({ id: req.params.id }));
});

server.listen(8080, () => {
    console.log("server is listening");
});

