const addToCart = require("./addToCart/index.post.json");
const banners = require("./banners/index.get.json");
const categories = require("./categories/index.get.json");
const products = require("./products/index.get.json");

module.exports = () => ({
  addToCart,
  banners,
  categories,
  products,
});
