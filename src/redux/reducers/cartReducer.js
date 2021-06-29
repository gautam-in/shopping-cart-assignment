import {
  ADD_PRODUCT_TO_CART,
  CLEAR_CART,
  DECREMENT_PRODUCT_QUANTITY_IN_CART,
  INCREMENT_PRODUCT_QUANTITY_IN_CART,
  REMOVE_PRODUCT_TO_CART,
} from "../constants/constants";

const initialState = {
  cartItems: [],
  cartItemsCount: 0,
  error: "",
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      let tempProductList = [...state.cartItems];
      console.log(action);
      if (tempProductList.find((product) => product.id === action.payload.id)) {
        tempProductList.map((product) => {
          if (product.id === action.payload.id) {
            product.quantity = product.quantity + 1;
          }
          return product;
        });
      } else {
        const productToAdd = action.payload;
        productToAdd.quantity = 1;
        tempProductList = [...tempProductList, productToAdd];
      }
      return {
        ...state,
        cartItems: tempProductList,
        cartItemsCount: state.cartItemsCount + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
