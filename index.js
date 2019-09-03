const express = require('express');
const path = require("path");
const app = express();
const portNumber = 3000;

app.use('/static/', express.static('static'));

app.set('view engine', 'ejs');

/**
 * Router for Home Page
 */
app.get("/", (req, res, next) => {
    const data = {
        scripts: ['/static/js/home.js']
    };
    res.render("pages/home", data);
});
/**
 * Router for Login Page
 */
app.get("/login", (req, res, next) => {
    const data = {scripts: ['/static/js/login.js']};
    res.render("pages/login", data);
});
/**
 * Router for Product List Page
 */
app.get("/product-list", (req, res, next) => {
    const data = {
        scripts: ['/static/js/product-list.js']
    };
    res.render("pages/product-list", data);
});
/**
 * Router for Registration Page
 */
app.get("/registration", (req, res, next) => {
    const data = {scripts: ['/static/js/registration.js']};
    res.render("pages/registration", data);
});

/**
 * Get Banner list
 */

app.get("/api/getBanners", (req, res, next) => {
    res.set({
        'Content-Type': 'application/json'
      }).status(200).sendFile( __dirname + "/server/banners/index.get.json");
});

/**
 * Get Product List
 */
app.get("/api/getProductList", (req, res, next) => {
    res.set({
        'Content-Type': 'application/json'
      }).status(200).sendFile( __dirname + "/server/products/index.get.json");
});

/**
 * Get Categories list
 */
app.get("/api/getCategories", (req, res, next) => {
    res.set({
        'Content-Type': 'application/json'
      }).status(200).sendFile( __dirname + "/server/categories/index.get.json");
});


app.listen(portNumber, function(){
    console.log("App started on localhost:" + portNumber);
});