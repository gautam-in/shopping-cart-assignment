    // express.js
    const express = require("express");
    const path = require("path");
    let products = require("./model/products.model");
    const exphbs = require('express-handlebars');
    const app = express();
    const port = 3000;   
   
	  
    // Compile the template into a Handlebars function
   
    app.use(express.json());
    app.get("/", (req, res) => {
      //   res.send("<h1>Hello World!</h1>");
      res.render("index.html");
    });
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
      });
    app.get("/products", (req, res) => {
      // DB
      res.json(products);
    });
    
    
    
   
    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
    