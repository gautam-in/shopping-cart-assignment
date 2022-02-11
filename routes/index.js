const products = require('../server/products/index.get.json');
const categories = require('../server/categories/index.get.json');
const banners = require('../server/banners/index.get.json');
const addToCart = require('../server/addToCart/index.post.json');

module.exports = function(app) {
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


};