import { useReducer, createContext, useContext, useCallback } from "react";

export const initialCart = {
  cart: { items: [] },
  user: {},
  cartOpen: false,
};

const createReducer = () => {
  return (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    const productIndex = state.cart?.items?.findIndex(
      (val) => val.id == action.payload.id
    );
    switch (action.type) {
      case "ADD_TO_CART":
        if (productIndex < 0) {
          addToCart(newState, action.payload);
        } else {
          quantityIncrement(newState, productIndex);
        }
        return newState;
      case "QUANT_INC":
        quantityIncrement(newState, productIndex);
        return newState;
      case "QUANT_DEC":
        quantityDecrement(newState, productIndex);
        return newState;
      case "REMOVE_ITEM":
        removeItem(newState, productIndex);
        return newState;
      case "USER":
        return { ...state, ...action.payload };
      case "TOGGLE_CART":
        return { ...state, ...action.payload };
      case "CLOSE_CART":
        return { ...state, ...action.payload };
      case "DO_CART_EMPTY":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
};

const DispatchContext = createContext();

export const StoreProvider = ({ children }) => {
  const memoizedReducer = useCallback(createReducer(), []);
  const [cartState, dispatch] = useReducer(memoizedReducer, initialCart);

  return (
    <DispatchContext.Provider value={{ cartState, dispatch }}>
      {children}
    </DispatchContext.Provider>
  );
};

function quantityIncrement(newState, productIndex) {
  newState.cart.items[productIndex].quantity += 1;
}
function quantityDecrement(newState, productIndex) {
  newState.cart.items[productIndex]?.quantity > 1
    ? (newState.cart.items[productIndex].quantity -= 1)
    : removeItem(newState, productIndex);
}
function removeItem(newState, productIndex) {
  const filteredItems = newState.cart.items.filter(
    (item) => item.id != newState.cart.items[productIndex].id
  );
  newState.cart.items = [...filteredItems];
}
function addToCart(newState, payload) {
  newState.cart.items.push(payload);
}

export const useDispatchStore = () => useContext(DispatchContext);
