import { PRODUCT_LIST, PRODUCT_SEARCH, PRODUCT_UPDATE } from '../actions/product';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case PRODUCT_LIST:
  case PRODUCT_SEARCH: {
    return [...payload];
  }
  case PRODUCT_UPDATE: {
    const updatedState = state.map((item) => (item.id === payload.id ? payload : item));
    return updatedState;
  }
  default:
    return state;
  }
};
