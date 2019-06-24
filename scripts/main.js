var express = require('express');
var itemCounter = require('./constant');
const fs = require('fs');
const routing = express.Router();
let obj = fs.readFileSync('./server/banners/index.get.json');  
let banners = JSON.parse(obj);
let obj1 = fs.readFileSync('./server/categories/index.get.json');  
let categories = JSON.parse(obj1);
let productObj = fs.readFileSync('./server/products/index.get.json'); 
let products = JSON.parse(productObj);
categories.categories.sort(function (a, b) {
    return a.order - b.order;
});
routing.get('/', function (req, res, next) {
    res.render('home', {
        banners: banners.banners,
        categories: categories.categories,
        item_counter: itemCounter.item_counter
    });  
}); 
routing.get('/products', function(req, res,next){
    res.render('products',{
        categories: categories.categories,
        products: products.products,
        item_counter: itemCounter.item_counter
    });
});
routing.get('/products/:id', function (req, res, next) {
    var categoryId = req.params.id;
    var ActiveCategories = categories.categories.filter(function(category){ return category.enabled});
    var product_cat = products.products.filter(function(product){return product.category === categoryId});
    res.render('products', {
        categories: ActiveCategories,
        products: product_cat,
        item_counter: itemCounter.item_counter
    })
});
routing.get('/login', function(req, res){
    res.render('login',{
        item_counter: itemCounter.item_counter
    })
});
routing.get('/register', function(req, res){
    res.render('register',{
        item_counter: itemCounter.item_counter
    })
});
module.exports = routing;