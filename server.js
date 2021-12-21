const express = require("express");
const path = require("path");
const compression = require("compression");
const bannersData = require("./server/banners/index.get.json");
const categoriesData = require("./server/categories/index.get.json");
const productsData = require("./server/products/index.get.json");
const addToCartAPIResponseData = require("./server/addToCart/index.post.json");

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/login", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/register", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/productsList", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/banners", (req, res) => {
  res.json(bannersData);
});

app.get("/categories", (req, res) => {
  res.json(categoriesData);
});

app.get("/products", (req, res) => {
  res.json(productsData);
});

app.post("/addToCart", (req, res) => {
  console.log("addToCart API request body: ", req.body);
  res.json(addToCartAPIResponseData);
});

// Handling non matching request from the client
app.get("*", (req, res) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

// app.get("/*", (req, res) => {
//   res.sendFile("index.html", { root: __dirname });
// });

app.listen(4200, () => console.log("Server running on port 4200 !"));
