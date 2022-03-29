var express = require("express");
var router = express.Router();

router.post("/addProductsToCart", function (req, res, next) {
  const data = {
    response: "Success",
    responseMessage: "Product added to cart successfully",
  };
  res.status(200).json(data);
});

module.exports = router;
