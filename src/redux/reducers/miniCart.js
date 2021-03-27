const initialState = {
  totalItems: 0,
  totalPrice: 0,
  items: [],
};

const ADD_TO_CART = 'miniCart/ADD';
const REMOVE_FROM_CART = 'miniCart/REMOVE';

export const cartActions = {
  addToCart: (payload) => ({
    type: ADD_TO_CART,
    payload,
  }),
  removeFromCart: (payload) => ({
    type: REMOVE_FROM_CART,
    payload,
  }),
};

export const miniCart = (state = initialState, { type, payload }) => {
  switch (type) {
  case ADD_TO_CART: {
    const totalItems = state.totalItems + 1;
    const totalPrice = state.totalPrice + payload.price;
    const product = state.items.find((item) => item.id === payload.id);
    if (product) {
      product.count += 1;
      product.stock -= 1;
      return {
        ...state,
        totalPrice,
        totalItems,
      };
    }
    return {
      totalPrice,
      totalItems,
      items: [...state.items, {
        ...payload,
        stock: payload.stock - 1,
        count: 1,
      }],
    };
  }
  case REMOVE_FROM_CART: {
    const product = state.items.find((item) => item.id === payload.id);
    const totalItems = state.totalItems > 0 ? state.totalItems - 1 : 0;
    const totalPrice = state.totalPrice > 0 ? state.totalPrice - payload.price : 0;
    if (product && product.count > 1) {
      product.count -= 1;
      product.stock += 1;
      return {
        ...state,
        totalPrice,
        totalItems,
      };
    }
    const items = state.items.filter((item) => item.id !== payload.id);
    return {
      totalItems, items, totalPrice,
    };
  }
  default:
    return state;
  }
};
