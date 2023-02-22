const express = require("express");
const app = express();
const path = require("node:path");
const fs = require("node:fs");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", function (req, res) {});

const port = 8080;
app.listen(port, () => console.log("server running...!"));

app.get("/banners", (request, response) => {
  const banners = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "./banners/index.get.json"))
  );
  response.send(banners);
  //   console.log(banners);
});

app.get("/categories", (request, response) => {
  const categories = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "./categories/index.get.json"))
  );
  response.send(categories);
});

app.get("/products", (request, response) => {
  const products = getProducts();
  response.send(products);
});

app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  const products = getProducts();

  const product = products.find((_product) => _product.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(code).send(new Error("item doesn't exist"));
  }
});

function getProducts() {
  return JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "./products/index.get.json"))
  );
}
