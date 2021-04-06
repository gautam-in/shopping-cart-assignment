import { batch } from 'react-redux';
import loader from './loader';
import productAction from './product';

export const ADD_TO_CART = 'miniCart/ADD';
export const REMOVE_FROM_CART = 'miniCart/REMOVE';

export default {
  addToCart: (payload) => (dispatch, getState, api) => {
    dispatch(loader.showLoader());
    return api.post('/addToCart', { id: payload.id })
      .then(() => {
        let state = getState().miniCart;
        const totalItems = state.totalItems + 1;
        const totalPrice = state.totalPrice + payload.price;
        let product = state.items.find((item) => item.id === payload.id);
        if (product) {
          product.count += 1;
          state = {
            ...state,
            totalPrice,
            totalItems,
          };
        } else {
          product = payload;
          product.count = 1;
          state = {
            totalPrice,
            totalItems,
            items: [...state.items, product],
          };
        }
        batch(() => {
          dispatch({
            type: ADD_TO_CART,
            payload: state,
          });
          dispatch(productAction.productUpdate(product));
        });
        dispatch(loader.hideLoader());
      }).catch(() => dispatch(loader.hideLoader()));
  },
  removeFromCart: (payload) => (dispatch, getState) => {
    const state = getState().miniCart;
    let product = state.items.find((item) => item.id === payload.id);
    state.totalItems = state.totalItems > 0 ? state.totalItems - 1 : 0;
    state.totalPrice = state.totalPrice > 0 ? state.totalPrice - payload.price : 0;
    if (product && product.count > 1) {
      product.count -= 1;
    } else {
      product = payload;
      product.count = 0;
      state.items = state.items.filter((item) => item.id !== payload.id);
    }
    batch(() => {
      dispatch({
        type: REMOVE_FROM_CART,
        payload: state,
      });
      dispatch(productAction.productUpdate(product));
    });
  },
};
