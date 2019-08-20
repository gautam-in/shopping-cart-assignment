var express = require('express');
var app = express();
var fs = require("fs");
var cors = require('cors')
const platformPath = (process.platform == "win32") ? "\\" : "/"
var APIDetails = {
  "banners": {
    "APIName": "/banners",
    "folderName": "banners",
    "fileName": "index.get.json"
  },
  "categories": {
    "APIName": "/categories",
    "folderName": "categories",
    "fileName": "index.get.json"
  },
  "products": {
    "APIName": "/products",
    "folderName": "products",
    "fileName": "index.get.json"
  },
  "addToCart": {
    "APIName": "/addToCart",
    "folderName": "addToCart",
    "fileName": "index.post.json"
  },

};
app.use(cors());
// Banners
app.get(APIDetails.banners.APIName, function(req, res) {
  fs.readFile(__dirname + platformPath + APIDetails.banners.folderName + platformPath + APIDetails.banners.fileName, 'utf8', function(err, data) {
    res.setHeader('content-type', 'text/json');
    res.end(data);
  });
})

// Categories
app.get(APIDetails.categories.APIName, function(req, res) {
  fs.readFile(__dirname + platformPath + APIDetails.categories.folderName + platformPath + APIDetails.categories.fileName, 'utf8', function(err, data) {
    res.setHeader('content-type', 'text/json');
    res.end(data);
  });
})

// Products
app.get(APIDetails.products.APIName, function(req, res) {
  fs.readFile(__dirname + platformPath + APIDetails.products.folderName + platformPath + APIDetails.products.fileName, 'utf8', function(err, data) {
    res.setHeader('content-type', 'text/json');
    res.end(data);
  });
})

// Add To Cart
app.post(APIDetails.addToCart.APIName, function(req, res) {
  fs.readFile(__dirname + platformPath + APIDetails.addToCart.folderName + platformPath + APIDetails.addToCart.fileName, 'utf8', function(err, data) {
    res.setHeader('content-type', 'text/json');
    res.end(data);
  });
})

var server = app.listen(5000, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("listening at http://%s:%s", host, port)
})
