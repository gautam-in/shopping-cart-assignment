import { ADD_ITEMS_TO_CART, REMOVE_ITEMS_FROM_CART } from "./actionType";

export const addItemsToCart = (productData) => (dispatch, getState) => {
  let finalProductData = [];
  let flag = false;
  let cartData = getState().getCartDetail.cartItems;
  if (cartData.length === 0) {
    finalProductData.push(productData);
  } else {
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].id === productData.id) {
        cartData[i].count++;
        flag = true;
      }
    }
    if (!flag) {
      finalProductData.push(productData);
    }
  }
  dispatch({
    type: ADD_ITEMS_TO_CART,
    info: "Items Added",
    payload: [...finalProductData, ...cartData],
  });
};

export const removeItemsFromCart = (productData) => (dispatch, getState) => {
  let cartData = getState().getCartDetail.cartItems;
  let index = 0;
  let flag = false;
  for (let i = 0; i < cartData.length; i++) {
    if (cartData[i].id === productData.id) {
      if (cartData[i].count > 1) {
        cartData[i].count--;
        flag = true;
      } else {
        index = i;
      }
    }
  }
  if (!flag) {
    cartData.splice(index, 1);
  }
  dispatch({
    type: REMOVE_ITEMS_FROM_CART,
    info: "Items Removed",
    payload: [...cartData],
  });
};
