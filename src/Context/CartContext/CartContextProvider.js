import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultState = {
  count: 0,
  products: {},
  cartOpen: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      console.log(1);
      return {
        ...state,
        count: state.count + 1,
        products: { ...state.products, ...action.product },
      };
    }

    case "EDIT_ITEM": {
      const productsInCart = { ...state.products }; //JSON.parse(JSON.stringify(state.products));
      const { stock, quantity } = productsInCart[action.id];
      productsInCart[action.id].quantity =
        stock === quantity ? stock : quantity + 1;
      return {
        ...state,
        count: quantity === stock ? state.count : state.count + 1,
        products: { ...productsInCart },
      };
    }

    case "REMOVE_ITEM": {
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

    case "HANDLE_CART": {
      console.log("1", state.products);
      return {
        ...state,
        cartOpen: action.cartOpen,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, defaultState);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
