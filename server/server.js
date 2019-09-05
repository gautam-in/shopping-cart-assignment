var express = require('express');
var app = express();
var fs = require("fs");
var path = require('path');
var cors = require('cors')
var http = require('http');
var https = require('https');
var certificate = fs.readFileSync(path.join(__dirname, 'server.crt'), 'utf8');
var privateKey  = fs.readFileSync(path.join(__dirname, 'server.key'), 'utf8');
var credentials = {key: privateKey, cert: certificate};


// Server Creation
app.use(cors());
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

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

httpServer.listen(5000);
httpsServer.listen(8081);
