const initialState = {
  cartItems: [],
  count: 0,
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "ADD_CART_ITEM":
      return {
        cartItems: [...state.cartItems, action.payload],
        count: state.count + 1,
      };
    case "INCREMENT_QTY":
      let new_cart = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      return { cartItems: new_cart, count: state.count + 1 };
    case "DECREMENT_QTY":
      let dec_cart = state.cartItems.map((item, i) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      dec_cart = dec_cart.filter((item) => item.quantity > 0);
      return { cartItems: dec_cart, count: state.count - 1 };
    case "RESET_CART":
      return { cartItems: [], count: 0 };
    default:
      return state;
  }
};

export default reducer;
