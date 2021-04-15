  
const express = require('express');
const app = express();
const portNumber = 3000;

app.use('/static/', express.static('static'));

//setting template engine as ejs
app.set('view engine', 'ejs');

// get Router for Home Page
app.get("/", (req, res) => {
    const data = {
        scripts: ['/static/js/home.js']
    };
    res.render("pages/home", data);
});

// post Router for Home Page
app.post("/", (req, res) => {
    const data = {
        scripts: ['/static/js/home.js']
    };
    res.render("pages/home", data);
});

//Router for Registration Page
 app.get("/registration", (req, res) => {
    const data = {scripts: ['/static/js/registration.js']};
    res.render("pages/registration", data);
});

// Router for Login Page
app.get("/login", (req, res) => {
    const data = {scripts: ['/static/js/login.js']};
    res.render("pages/login", data);
});

// for product list Page
app.get("/product-list",(req,res)=>{
    const data = {scripts: ['/static/js/product-list.js']};
    res.render("pages/product-list",data);
})

//Get Banner list
 app.get("/api/getBanners", (req, res) => {
    res.set({
        'Content-Type': 'application/json'
      }).status(200).sendFile( __dirname + "/server/banners/index.get.json");
});

//Get Categories list
 app.get("/api/getCategories", (req, res ) => {
    res.set({
        'Content-Type': 'application/json'
      }).status(200).sendFile( __dirname + "/server/categories/index.get.json");
});

// Get Product list
 app.get("/api/getProductList", (req, res) => {
    res.set({
        'Content-Type': 'application/json'
      }).status(200).sendFile( __dirname + "/server/products/index.get.json");
});

// start port at 3000
app.listen(portNumber, function(){
    console.log("App started on localhost:" + portNumber);
});