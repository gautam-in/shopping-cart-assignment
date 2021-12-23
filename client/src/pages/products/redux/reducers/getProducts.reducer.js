import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from '../actions/actionTypes';

const initialState = {
  productsData: [
    {
      name: '',
      imageURL: '',
      description: '',
      price: 0,
      stock: 0,
      category: '',
      sku: '',
      id: '',
    },
  ],
  error: { getProducts: null },
  loading: { getProducts: false },
};

export const getProductsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PRODUCTS_LOADING:
      return {
        ...state,
        loading: { ...state.loading, getProducts: true },
        error: { ...state.error, getProducts: null },
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsData: action.payload,
        loading: { ...state.loading, getProducts: false },
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: { ...state.loading, getProducts: false },
        error: { ...state.error, getProducts: action.payload },
      };
    default:
      return state;
  }
};
