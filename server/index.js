const express = require("express");
const fs = require("fs");
const path = require("path");
const application = express();
const port = 5000;

application.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

application.get("/", (request, response) => {
  response.send("Server started!");
});

application.get("/products", (request, response) => {
  response.send(
    JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "products/index.get.json"))
    )
  );
});

application.get("/categories", (request, response) => {
  response.send(
    JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "categories/index.get.json"))
    )
  );
});

application.get("/banners", (request, response) => {
  response.send(
    JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "banners/index.get.json"))
    )
  );
});

application.post("/addToCart", (request, response) => {
  response.send(
    JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "addToCart/index.post.json"))
    )
  );
});

application.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
