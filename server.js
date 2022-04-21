const express = require("express");
const path = require("path");
var cors = require('cors');
const app = express();
const port = 3000;
const productsData = require("./server/products/index.get.json")
const categoriesData = require("./server/categories/index.get.json")
const bannersData = require("./server/banners/index.get.json")
const addToCartData = require("./server/addToCart/index.post.json")

app.use(cors())


app.use("/static", express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"))
})

app.get("/categories", (req, res) => {
  res.json({
    data: categoriesData
  });
});
app.get("/products", (req, res) => {
  res.json({
    data: productsData
  });
});
app.get("/banners", (req, res) => {
  res.json({
    data: bannersData
  });
});
app.post("/addToCart", (req, res) => {
  res.json({
    data: addToCartData
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});