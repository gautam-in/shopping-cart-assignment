const express = require("express");
const compression = require("compression");
var path = require("path");

var cors = require("cors");
const app = express();
const fs = require("fs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(compression());
// app.use(express.static(path.join("../static", "public")));

// app.use(express.static(path.join(__dirname, "../static/images")));

const banners = require("./banners/index.get.json");
const categories = require("./categories/index.get.json");
const products = require("./products/index.get.json");

var userData = [];
var cartData = [];
fs.readFile("./server/users/usersData.json", "utf-8", (err, jsonData) => {
  if (err) {
    console.log(err);
  } else {
    try {
      userData = JSON.parse(jsonData);
    } catch {
      console.log("Something wrong with json data");
    }
  }
});

fs.readFile("./server/addToCart/index.get.json", "utf-8", (err, jsonData) => {
  if (err) {
    console.log(err);
  } else {
    try {
      cartData = JSON.parse(jsonData);
    } catch {
      console.log("Something wrong with json data");
    }
  }
});

app.get("/banners", (req, res) => {
  res.set("Cache-control", "public, max-age=31536000");
  res.status(200).send(banners);
});

app.get("/categories", (req, res) => {
  res.set("Cache-control", "public, max-age=31536000");
  res.status(200).send(categories);
});

app.get("/products", (req, res) => {
  console.log("Hi");
  res.set("Cache-control", "public, max-age=31536000");
  res.status(200).send(products);
});

app.post("/register", async (req, res) => {
  userData.push(req.body);
  await fs.writeFile(
    "./server/users/usersData.json",
    JSON.stringify(userData),
    (err, jsonData) => {
      if (err) {
        res.send({
          status: "failed",
        });
      } else {
        res.send({
          status: "success",
        });
      }
    }
  );
});

app.post("/addItems", async (req, res) => {
  cartData = [...req.body];
  await fs.writeFile(
    "./server/addToCart/index.get.json",
    JSON.stringify(cartData),
    (err, jsonData) => {
      if (err) {
        res.send({
          status: "failed",
        });
      } else {
        res.send({
          status: "success",
        });
      }
    }
  );
});

app.post("/users", (req, res) => {
  let val = userData.filter(
    (val) => val.email === req.body.email && val.password === req.body.password
  );
  if (val.length > 0) {
    res.send({
      status: "success",
    });
  } else {
    res.send({
      status: "failed",
    });
  }
});

app.get("/getItems", (req, res) => {
  res.status(200).send(cartData);
});

app.listen(5000, () => console.log("listening on port 5000"));
