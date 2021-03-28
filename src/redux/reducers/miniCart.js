import { batch } from 'react-redux';
import axiosConfig from '../../utils/axiosConfig';
import { loaderActions } from './loader';
import { productActions } from './products';

const initialState = {
  totalItems: 0,
  totalPrice: 0,
  items: [],
};

const ADD_TO_CART = 'miniCart/ADD';
const REMOVE_FROM_CART = 'miniCart/REMOVE';

export const cartActions = {
  addToCart: (payload) => (dispatch, getState) => {
    dispatch(loaderActions.showLoader());
    return axiosConfig.post('/addToCart', { id: payload.id })
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
          dispatch(productActions.productUpdate(product));
        });
        dispatch(loaderActions.hideLoader());
      }).catch(() => dispatch(loaderActions.hideLoader()));
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
      dispatch(productActions.productUpdate(product));
    });
  },
};

export const miniCart = (state = initialState, { type, payload }) => {
  switch (type) {
  case ADD_TO_CART:
  case REMOVE_FROM_CART: {
    return { ...payload };
  }
  default:
    return state;
  }
};
