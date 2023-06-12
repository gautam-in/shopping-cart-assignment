const express = require("express");
const app = express();
const PORT = 8080;

app.get("/api/health", function (req, res) {
  res.send("Health OK!");
});
app.post("/api/addToCart", function (req, res) {
  res.send(require("./api/addToCart/index.post.json"));
});

app.get("/api/banners", function (req, res) {
  res.send(require("./api/banners/index.get.json"));
});

app.get("/api/categories", function (req, res) {
  res.send(require("./api/categories/index.get.json"));
});

app.get("/api/products", function (req, res) {
  res.send(require("./api/products/index.get.json"));
});

app.listen(PORT, () => {
  console.log("Nodejs App Started");
});
