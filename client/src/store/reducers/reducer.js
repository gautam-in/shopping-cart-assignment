import * as types from "../actions/actionTypes";

const initstate = {
  cart: JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : []
};

const addCartItem = (state,action) =>{
  return { cart: [...state.cart, action.payload] }
}

const incrementQuantity = (state,action) => {
  let new_cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
    );
    return { cart: new_cart }
}

const decrementQuantity = (state,action) => {
  let dec_cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
    );
    dec_cart = dec_cart.filter((item) => item.qty > 0);
    return { cart: dec_cart };
}

const doCartEmpty = () => {
  return { cart: [] };
}

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case types.ADD_CART_ITEM: return addCartItem(state,action);
    case types.INCREMENT_QTY: return incrementQuantity(state,action);
    case types.DECREMENT_QTY: return decrementQuantity(state,action);
    case types.EMPTY_CART: return doCartEmpty();
    default: return state;
  }
};

export default reducer;
