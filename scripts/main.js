var express = require('express');
const routing = express.Router();

const fs = require('fs');
let obj = fs.readFileSync('./server/banners/index.get.json');  
let banners = JSON.parse(obj);
let obj1 = fs.readFileSync('./server/categories/index.get.json');  
let categories = JSON.parse(obj1);
routing.get('/', function (req, res, next) {
    res.render('home', {
        banners: banners.banners,
        categories: categories.categories
    });  
}); 
module.exports = routing;