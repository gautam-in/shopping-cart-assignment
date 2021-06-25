import {
  FETCH_BANNERS,
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
  SET_CATEGORY,
  SET_CART_OPEN,
  ADD_TO_SHIPPING,
  DELETE_FROM_SHIPPING,
  RESET_STORE,
  SIGN_IN,
  SIGN_OUT,
} from "../actions/types";
import _ from "lodash";

const shoppingReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BANNERS:
      return { ...state, banners: action.payload };
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_CATEGORY:
      return { ...state, selected: action.payload };
    case SET_CART_OPEN:
      return { ...state, cartOpen: action.payload };
    case ADD_TO_SHIPPING:
      let { cart, totalPrice } = addToCart(
        action.payload,
        state.cartItems?.cart,
        state.cartItems?.totalPrice
      );
      return { ...state, cartItems: { ...state.cartItems, cart, totalPrice } };
    case DELETE_FROM_SHIPPING:
      let { deleteCart, newTotalPrice } = deleteFromCart(
        action.payload,
        state.cartItems?.cart,
        state.cartItems?.totalPrice
      );
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          cart: deleteCart,
          totalPrice: newTotalPrice,
        },
      };
    case SIGN_IN:
      localStorage.setItem("user", action.payload.email);
      return { ...state, userId: action.payload.email };

    case SIGN_OUT:
      localStorage.clear();
      return { ...state, userId: null };
    case RESET_STORE: {
      state = {};
      return state;
    }
    default:
      return state;
  }
};

const addNewProduct = (product, cart, totalPrice = 0) => {
  let addedProduct = { ...product };
  addedProduct.quantity = 1;
  addedProduct.totalPrice = addedProduct.quantity * addedProduct.price;
  totalPrice += addedProduct.price;
  cart = [...cart, { ...addedProduct }];
  return { cart, totalPrice };
};
const addToCart = (product, cart = [], totalPrice ) => {
  if (cart.length > 0) {
    let existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.price * existingItem.quantity;
      totalPrice += existingItem.price;
      return { cart, totalPrice };
    } else {
      return addNewProduct(product, cart, totalPrice);
    }
  } else {
   return addNewProduct(product, cart, totalPrice);
  }
};

const deleteFromCart = (product, deleteCart, newTotalPrice) => {
  let deleteIndex;
  deleteCart.find((item, index) => {
    if (item.id === product.id) deleteIndex = index;
  });
  product.quantity -= 1;
  product.totalPrice -= product.price;
  newTotalPrice -= product.price;
  if (product.quantity === 0) {
    deleteCart.splice(deleteIndex, 1);
  }
  return { deleteCart, newTotalPrice };
};

export default shoppingReducer;
