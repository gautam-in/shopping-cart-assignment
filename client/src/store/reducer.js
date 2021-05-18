const initstate = {
  cart: [],
};

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return { cart: [...state.cart, action.payload] };

    case "RESET_CART":
      return { cart: [] };
    default:
      return state;
  }
};

export default reducer;
