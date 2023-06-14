const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const path = require("path");
const http = require("http");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.static(__dirname + "/static"));

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

app.listen(PORT, (req, res) => {
  console.log(req);
  console.log("Nodejs App Started");
});
