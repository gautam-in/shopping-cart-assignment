import {
  ADD_ITEM,
  EDIT_ITEM,
  REMOVE_ITEM,
  HANDLE_CART,
  RESTORE_STORE,
} from "../../constants/storeActions/storeActions";

const INITIAL_STATE = {
  count: 0,
  products: {},
  cartOpen: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        count: state.count + 1,
        products: { ...state.products, ...action.product },
      };
    }

    case EDIT_ITEM: {
      const productsInCart = { ...state.products };
      const { stock, quantity } = productsInCart[action.id];
      productsInCart[action.id].quantity =
        stock === quantity ? stock : quantity + 1;
      return {
        ...state,
        count: quantity === stock ? state.count : state.count + 1,
        products: { ...productsInCart },
      };
    }

    case REMOVE_ITEM: {
      const productsInCart = { ...state.products };
      const { quantity } = productsInCart[action.id];
      productsInCart[action.id].quantity = quantity - 1;
      if (quantity === 1) {
        delete productsInCart[action.id];
      }

      return {
        ...state,
        count: state.count - 1,
        products: { ...productsInCart },
      };
    }
    case HANDLE_CART: {
      return {
        ...state,
        cartOpen: action.cartOpen,
      };
    }
    case RESTORE_STORE: {
      return action.product.cart;
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default cartReducer;
