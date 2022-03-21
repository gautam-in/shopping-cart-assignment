import * as cartAction from "./cart-action";
import cartActionTypes from "./cart-actiontypes";

it("should create an action to set cart status", () => {
  const cartStatus = { type: cartActionTypes.SHOW_CART, payload: true };
  expect(cartAction.showCart(true)).toEqual(cartStatus);
});

it("should create an action to add item to cart", () => {
  const product = {
    name: "Apple - Washington, Regular, 4 pcs",
    imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
    description:
      "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
    price: 187,
    stock: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-apple-4",
    id: "5b6c6aeb01a7c38429530884",
  };
  const addItemToCart = {
    type: cartActionTypes.ADD_CART,
    payload: product,
  };
  expect(cartAction.addCart(product)).toEqual(addItemToCart);
});

it("should create an action to remove item from cart", () => {
  const product = {
    name: "Apple - Washington, Regular, 4 pcs",
    imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
    description:
      "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
    price: 187,
    stock: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-apple-4",
    id: "5b6c6aeb01a7c38429530884",
  };
  const removeItemFromCart = {
    type: cartActionTypes.REMOVE_CART,
    payload: product,
  };
  expect(cartAction.removeCart(product)).toEqual(removeItemFromCart);
});

it("should create an action to buy products from product lists", () => {
  const product = {
    name: "Apple - Washington, Regular, 4 pcs",
    imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
    description:
      "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
    price: 187,
    stock: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-apple-4",
    id: "5b6c6aeb01a7c38429530884",
  };
  const buyItemFromProductList = {
    type: cartActionTypes.BUY_ITEM,
    payload: product,
  };
  expect(cartAction.buyItems(product)).toEqual(buyItemFromProductList);
});
