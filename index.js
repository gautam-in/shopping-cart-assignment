  
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

//add to cart
app.post("/api/addToCart", (req, res) => {
    res.set({
        'Content-Type': 'application/json'
      }).status(200).sendFile( __dirname + "/server/addToCart/index.post.json");
});


//added robots.txt file for seo
app.use('/robots.txt', function (req, res, next) {
    res.type('text/plain')
    res.send("User-agent: *\n Allow: /");
});

app.use('/sitemap.xml', function (req, res, next) {
    // res.type('text/xml')
    res.send('<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns:xhtml="http://www.w3.org/1999/xhtml"> <url><loc>http://localhost:3000 </loc><xhtml:link rel="alternate" hreflang="en-us" href="http://localhost:3000"/></url><url><loc>http://localhost:3000/registration </loc><xhtml:link rel="alternate" hreflang="en-us" href="http://localhost:3000/registration"/></url> <url><loc>http://localhost:3000/login </loc><xhtml:link rel="alternate" hreflang="en-us" href="http://localhost:3000/login"/></url><url><loc>http://localhost:3000/product-list </loc><xhtml:link rel="alternate" hreflang="en-us" href="http://localhost:3000/product-list"/></url>');
});


//error page
app.use(function(req, res, next){
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {
        res.render("pages/404");
      return;
    }
  
    // respond with json
    if (req.accepts('json')) {
      res.send({ error: 'Not found' });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('Not found');
  });
// start port at 3000
app.listen(portNumber, function(){
    console.log("App started on localhost:" + portNumber);
});

