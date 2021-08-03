const ADD_TO_CART = "ADD_TO_CART";
const MANAGE_CART = "MANAGE_CART";

export function addToCart(payload) {
  return { type: ADD_TO_CART, payload };
}

export function manageCart(payload) {
  return { type: MANAGE_CART, payload };
}

const cart = { count: 0, itemsList: {} };

export function cartReducer(state = cart, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        itemsList: { ...state.itemsList, ...action.payload },
        count: state.count + 1,
      };

    case MANAGE_CART:
      return { ...action.payload };

    default:
      return { ...state };
  }
}
