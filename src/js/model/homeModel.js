const config = require("../config");
const helper = require("../helper");

export const state = {
  categories: {},
  offers: {},
  products: {
    filterType: "",
    filterValue: "",
    productList: {},
  },
  cart: {},
};
/// Fetching Categories
export const fetchCategories = async function () {
  helper.delay();
  state.categories = await helper.getJSON(`${config.BASE_URL}/categories`);
};
/// Fetching Offers
export const fetchOffers = async function () {
  helper.delay();
  state.offers = await helper.getJSON(`${config.BASE_URL}/banners`);
};

/// Fetching Products
export const fetchProducts = async function (category = null) {
  const products = await helper.getJSON(`${config.BASE_URL}/products`);
  if (!category) {
    state.products.productList = products;
    state.products.filterType = "";
    state.products.filterValue = "";
  } else {
    state.products.filterType = "category";
    state.products.filterValue = category;
    state.products.productList = products.filter(
      (product) => product.category == category
    );
  }
};

export const persistUserData = async function (user) {
  window.localStorage.setItem(user.email, JSON.stringify(user));
};
export const addToCart = async function (productId = null) {
  if (productId) {
    if (this.state.cart[productId]) {
      this.state.cart[productId]["quantity"] += 1;
    } else {
      this.state.cart[productId] = {};
      this.state.cart[productId]["quantity"] = 1;
    }
  }
  const productList = this.state.products.productList;
  const cartItemList = this.state.cart;
  const cartItems = productList.map((product) => {
    if (cartItemList[product.id]) {
      this.state.cart[product.id] = {
        ...cartItemList[product.id],
        ...product,
      };
    }
  });
};
export const updateCart = async function (productId, quantityOffset) {
  if (productId) {
    // Product already in the cart
    if (this.state.cart[productId]) {
      this.state.cart[productId]["quantity"] += quantityOffset;
    } else {
      // New product in the cart
      this.state.cart[productId] = {};
      this.state.cart[productId]["quantity"] = quantityOffset;

      // Update the new product details in the cart object
      const productList = this.state.products.productList;
      const cartItemList = this.state.cart;
      const cartItems = productList.map((product) => {
        if (cartItemList[product.id]) {
          this.state.cart[product.id] = {
            ...cartItemList[product.id],
            ...product,
          };
        }
      });
    }
  }
};
