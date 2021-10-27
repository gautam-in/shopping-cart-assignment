import React, {
  useReducer,
  createContext,
  useContext,
  useCallback,
} from "react";

const StateContext = createContext();
const DispatchContext = createContext();

export const StoreProvider = ({ children }) => {
  const reducer = useCallback((state, action) => {
    const newState = { ...state };
    const productIndex = state.cart?.items?.findIndex(
      (val) => val.id == action.payload.id
    );
    console.log("state", state, action.payload.id, productIndex);
    switch (action.type) {
      case "ADD_TO_CART":
        if (productIndex < 0) {
          add(newState, action.payload);
        } else {
          increament(newState, productIndex);
        }
        return newState;
      case "INCREAMENT":
        increament(newState, productIndex);
        return newState;
      case "DECREAMENT":
        decreament(newState, productIndex);
        return newState;
      case "REMOVE":
        remove(newState, productIndex);
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
        throw new Error("unknown Wrror");
    }
  }, []);
  // const UserCache = localStorageLoggedInuser();
  const [cartState, dispatch] = useReducer(reducer, {
    cart: { items: [] },
    user: {},
    cartOpen: false,
  });

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={cartState}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

function increament(newState, productIndex) {
  newState.cart.items[productIndex].quantity += 1;
}
function decreament(newState, productIndex) {
  newState.cart.items[productIndex]?.quantity > 1
    ? (newState.cart.items[productIndex].quantity -= 1)
    : remove(newState, productIndex);
}
function remove(newState, productIndex) {
  const filteredItems = newState.cart.items.filter(
    (item) => item.id != newState.cart.items[productIndex].id
  );
  newState.cart.items = [...filteredItems];
}
function add(newState, payload) {
  newState.cart.items.push(payload);
}

export const useStore = () => {
  const cartState = useContext(StateContext);
  const dispatch = useDispatchStore();
  const { cart, user, cartOpen } = cartState;
  const { items } = cart;
  const total = items.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
  const totalquantity = items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const setToggleCart = () => {
    dispatch({
      type: "TOGGLE_CART",
      payload: { cartOpen: !cartOpen },
    });
  };
  const setCloseCart = () => {
    dispatch({
      type: "CLOSE_CART",
      payload: { cartOpen: false },
    });
  };
  const doCartEmpty = () => {
    dispatch({
      type: "DO_CART_EMPTY",
      payload: { cart: { items: [] } },
    });
  };
  return {
    items,
    total,
    totalquantity,
    user,
    cartOpen,
    setToggleCart,
    setCloseCart,
    doCartEmpty,
  };
};
export const useDispatchStore = () => useContext(DispatchContext);
