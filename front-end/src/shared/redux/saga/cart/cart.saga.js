import { call, put } from 'redux-saga/effects';
import { addToCartAPI } from '../../../endpoints';


import { httpRequest } from "../../../services/httpRequest.service";
import { CART_ACTION_TYPES } from "../../actionTypes/cart";


const addProduct = ({ cart, newItem }) => {

  let tempCart = [...cart];
  let index = tempCart.findIndex((item) => item.id === newItem.id);

  if (index > -1) {
    tempCart[index]['quantity'] = tempCart[index]['quantity'] + 1;
  } else {
    tempCart.push({ ...newItem, quantity: 1 });
  }
  return tempCart;
}


// Fetching banners
export function* addToCart(data) {
  try {

    const result = yield call(httpRequest, addToCartAPI, 'POST');
    const {response} = result.data; 
    if (response.toLowerCase() === 'success') {
      yield put({
        type: CART_ACTION_TYPES.ADD_TO_CART,
        payload: addProduct(data.payload)
      });
    }

  } catch (error) {
    yield put({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: []
    });
  }
}
