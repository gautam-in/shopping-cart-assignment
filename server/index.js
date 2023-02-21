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

const { readFileSync } = require("node:fs");

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
  const products = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "./products/index.get.json"))
  );
  response.send(products);
});
