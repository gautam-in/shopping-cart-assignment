import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/miniCart';

const initialState = {
  totalItems: 0,
  totalPrice: 0,
  items: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case ADD_TO_CART:
  case REMOVE_FROM_CART: {
    return { ...payload };
  }
  default:
    return state;
  }
};
