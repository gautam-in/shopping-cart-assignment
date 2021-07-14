import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_PRODUCT_QUANTITY_IN_CART,
  INCREMENT_PRODUCT_QUANTITY_IN_CART,
  REMOVE_PRODUCT_FROM_CART,
  TOGGLE_CART_MODAL,
} from "../constants/constants";

const initialState = {
  cartItems: [],
  cartItemsCount: 0,
  cartTotalPrice: 0,
  error: "",
  isCartModalOpen: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      let updatedCartItems;
      const existingProduct = state.cartItems.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        updatedCartItems = state.cartItems.map((product) =>
          product.id === action.payload.id
            ? {
                ...action.payload,
                quantity: product.quantity + 1,
                totalPrice: product.totalPrice + action.payload.price,
              }
            : product
        );
      } else {
        updatedCartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1, totalPrice: action.payload.price },
        ];
      }
      return {
        ...state,
        cartItems: updatedCartItems,
        cartItemsCount: state.cartItemsCount + 1,
        cartTotalPrice: state.cartTotalPrice + action.payload.price,
      };
    }
    case DECREMENT_PRODUCT_QUANTITY_IN_CART: {
      let updatedCartItems = state.cartItems.map((product) =>
        product.id === action.payload.id
          ? {
              ...action.payload,
              quantity: product.quantity - 1,
              totalPrice: product.totalPrice - action.payload.price,
            }
          : product
      );
      return {
        ...state,
        cartItems: updatedCartItems,
        cartItemsCount: state.cartItemsCount - 1,
        cartTotalPrice: state.cartTotalPrice - action.payload.price,
      };
    }
    case INCREMENT_PRODUCT_QUANTITY_IN_CART: {
      let updatedCartItems = state.cartItems.map((product) =>
        product.id === action.payload.id
          ? {
              ...action.payload,
              quantity: product.quantity + 1,
              totalPrice: product.totalPrice + action.payload.price,
            }
          : product
      );
      return {
        ...state,
        cartItems: updatedCartItems,
        cartItemsCount: state.cartItemsCount + 1,
        cartTotalPrice: state.cartTotalPrice + action.payload.price,
      };
    }
    case REMOVE_PRODUCT_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload.id
        ),
        cartItemsCount: state.cartItemsCount - 1,
        cartTotalPrice: state.cartTotalPrice - action.payload.price,
      };
    }
    case TOGGLE_CART_MODAL: {
      return {
        ...state,
        isCartModalOpen: !state.isCartModalOpen,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
