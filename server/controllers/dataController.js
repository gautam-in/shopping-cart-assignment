const categoriesList = require('../categories/index.get.json');
const offerList = require('../banners/index.get.json');
const productList = require('../products/index.get.json');
const addToCartMessage = require('../addToCart/index.post.json');

const dataController = () => {
  return {
    categories: (req, res) => {
      res.send(categoriesList);
    },
    offers: (req, res) => {
      res.send(offerList);
    },
    products: (req, res) => {
      res.send(productList);
    },
    addToCart: (req, res) => {
      res.send(addToCartMessage);
    },
  };
};

module.exports = {
    categories: dataController().categories,
    offers: dataController().offers,
    products: dataController().products,
    addToCart: dataController().addToCart,
  };
