const productListView = require("../view/productListView");
const { headerController, updateCart } = require("./headerController");
const model = require("../model/homeModel");
const { getHash } = require("../helper");

const productListController = async function () {
  headerController();
  const query = getHash(window, "query") ?? "";
  await model.fetchProducts(query?.cat);
  await model.fetchCategories();
  await productListView.renderDOM(model.state);
  productListView.addToCartHandler(addToCart);
  productListView.filterSelectionHandler();
};

const addToCart = async function (productId) {
  await updateCart(productId, 1);
};

module.exports = productListController;
