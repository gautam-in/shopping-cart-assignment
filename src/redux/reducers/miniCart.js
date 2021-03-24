const initialState = {
  totalItems: 0,
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
    let items = [];
    const totalItems = state.totalItems + 1;
    const product = state.items.find((item) => item.id === payload.id);
    if (product) {
      items = state.items.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            price: item.price + payload.price,
            stock: item.stock - 1,
            count: item.count + 1,
          };
        }
        return item;
      });
    } else {
      items = [...state.items, {
        ...payload,
        stock: payload.stock - 1,
        count: 1,
      }];
    }
    return {
      totalItems, items,
    };
  }
  case REMOVE_FROM_CART: {
    let items = [];
    const product = state.items.find((item) => item.id === payload.id);
    const totalItems = state.totalItems > 0 ? state.totalItems - 1 : 0;
    if (product && product.count > 1) {
      items = state.items.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            price: item.price - payload.price,
            stock: item.stock + 1,
            count: item.count - 1,
          };
        }
        return item;
      });
    } else {
      items = state.items.filter((item) => item.id !== payload.id);
    }
    return {
      totalItems, items,
    };
  }
  default:
    return state;
  }
};
