  
const express = require('express');
const app = express();
const portNumber = 3000;

app.use('/static/', express.static('static'));
//setting template engine as ejs
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
// start port at 3000
app.listen(portNumber, function(){
    console.log("App started on localhost:" + portNumber);
});