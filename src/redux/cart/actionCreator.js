import { ADD_REMOVE_TO_CART } from "./actionType";

export const addRemoveToCart = (productData) => (dispatch, getState) => {
  // let selectProduct;
  let finalProductData = [];
  let flag = false;
  let cartData = getState().getCartDetail.cartItems;

  //For filtering with respect to ID the product data and putting the last one in the selectProduct
  for (let i = 0; i < cartData.length; i++) {
    if (cartData[i].id === productData.id) {
      // for decrementing/incrementing items in cart w.r.to type
      productData.type === "decrement"
        ? (cartData[i].count = cartData[i].count - 1)
        : (cartData[i].count = cartData[i].count + 1);
      if (cartData[i].count > 0) {
        finalProductData.push(cartData[i]);
      }
      flag = true;
    } else {
      finalProductData.push(cartData[i]);
    }
  }

  // if items added is new then add to new one
  flag
    ? (finalProductData = [...finalProductData])
    : (finalProductData = [...cartData, productData]);

  dispatch({
    type: ADD_REMOVE_TO_CART,
    info: "Items Added",
    payload: finalProductData,
  });
};
