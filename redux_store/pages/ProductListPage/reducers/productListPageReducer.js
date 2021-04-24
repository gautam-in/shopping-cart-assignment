import {
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_OK,
  FETCH_PRODUCT_ERROR,
  } from '../actions/productListPageActions';

const InitialState = {
  loadingProduct: false,
  items: [],
}

const productListPageReducer = (state = InitialState, action) => {
  let copy = { ...state, items: [...state.items] }
  const{items} = copy
  switch (action.type) {
    case FETCH_PRODUCT_OK:
      copy.items = action.payload.products
      copy.loadingProduct = false
    return copy
    case FETCH_PRODUCT_START:
    // copy.items = []
      copy.loadingProduct = true
    return copy
    case FETCH_PRODUCT_ERROR:
    // copy.items = []
      copy.loadingProduct = false
    copy.error = action.payload.error
    return copy
    default:
    return copy
  }
};

export default productListPageReducer;