const homeView = require("../view/homeView.js");
const model = require("../model/homeModel");
const { headerController } = require("./headerController");

const homeController = async function () {
  headerController();
  homeView.renderSpinner();
  await model.fetchCategories();
  await model.fetchOffers();
  homeView.renderDOM(model.state);
};
module.exports = homeController;
