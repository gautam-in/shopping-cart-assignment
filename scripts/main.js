var express = require('express');
const routing = express.Router();

const fs = require('fs');
let obj = fs.readFileSync('./server/banners/index.get.json');  
let banners = JSON.parse(obj);
let obj1 = fs.readFileSync('./server/categories/index.get.json');  
let categories = JSON.parse(obj1);
let productObj = fs.readFileSync('./server/products/index.get.json'); 
let products = JSON.parse(productObj);
routing.get('/', function (req, res, next) {
    res.render('home', {
        banners: banners.banners,
        categories: categories.categories
    });  
}); 
routing.get('/products', function(req, res,next){
    res.render('products',{
        categories: categories.categories,
        products: products.products
    });
});
module.exports = routing;