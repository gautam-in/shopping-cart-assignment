import { ADD_PRODUCTS, DELETE_PRODUCTS} from '../actions'

const defaultState = {
  cart: [],
  cartTotalQuantity: 0,
};

const updateCartItems = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      let newCart = [...state.cart];
      let itemIndex = state.cart.findIndex((c) => c.id === action.payload.id);
      let currItem = state.cart[itemIndex];
      if (currItem) {
        currItem = { ...currItem, qty: currItem.qty + 1 };

        newCart[itemIndex] = currItem;
      } else {
        newCart = [...state.cart, { ...action.payload, qty: 1 }];
      }

      return {
        cart: newCart,
        cartTotalQuantity: state.cartTotalQuantity + 1,
      };

    case DELETE_PRODUCTS:
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty - 1 }
              : item
          )
          .filter((item) => item.qty > 0),

        cartTotalQuantity: state.cartTotalQuantity - 1,
      };
    default:
      return state;
  }
};
export default updateCartItems;