const headerView = require("../view/headerView");
const model = require("../model/homeModel");
const headerController = async function () {
  await headerView.renderDOM(model.state);
  headerView.addExpandCartHandler(expandCart);
};
const updateCart = async (productId, quantityOffset) => {
  await model.updateCart(productId, quantityOffset);
  headerView.updateCart(model.state);
  headerView.addUpdateCartHandler(updateCart);
};
const expandCart = () => {
  headerView.expandCart();
};

module.exports = { headerController, updateCart };
