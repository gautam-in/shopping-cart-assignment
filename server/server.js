const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
var cors = require('cors')
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const dataPathBanners = './server/banners/index.get.json';
const dataPathCategories = './server/categories/index.get.json';
const dataPathProducts = './server/products/index.get.json';
const dataPathAddToCart = './server/addToCart/index.post.json';

// READ Banners
app.get('/banners', (req, res) => {
    fs.readFile(dataPathBanners, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
    });
});
// READ Categories
app.get('/categories', (req, res) => {
    fs.readFile(dataPathCategories, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
    });
});
// READ Products
app.get('/products', (req, res) => {
    fs.readFile(dataPathProducts, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
    });
});
// READ AddToCart
app.post('/addToCart', (req, res) => {
    fs.readFile(dataPathAddToCart, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
    });
});

// finally, launch our server on port 3001.
const server = app.listen(3001, () => {
    console.log("listening on port %s...", server.address().port);
});
