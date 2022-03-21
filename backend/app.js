var express = require("express");
var bodyParser = require("body-parser");
const port = 4000;

var app = express();

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/new", (req, res) => res.send("Hello World! New World"));

app.post("/register", jsonParser, (req, res) => {
  var user_name = req.body.firstName;
  var password = req.body.password;
  console.log(`User name ${user_name}, and password is ${password}`);
  res.end(`User name ${user_name}, and password is ${password}`);
});

app.post("/login", jsonParser, (req, res) => {
  console.log(`User Exists`);
  res.end(`User Exists`);
});

app.post("/addToCart", jsonParser, (req, res) => {
  console.log(`Item Added`);
  res.end(`Item Added To Cart`);
});

app.listen(port, () => console.log("App listening on port"));
