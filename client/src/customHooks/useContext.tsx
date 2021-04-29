// store.js
import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";
import { combineReducers } from "redux";

const initialState: any = {
  logedInUserDetails: { Email: "ajith@gmail.com" },
  myCartItems: [],
};
const StoreContext: any = React.createContext(initialState);

const loginDetailsReducer = (
  state: any = initialState.logedInUserDetails,
  action: any
) => {
  switch (action.type) {
    case "SET_LOGIN_DETAILS": {
      return action.payload;
    }
    default:
      return state;
  }
};

const myCartReducers = (state: any = initialState.myCartItems, action: any) => {
  switch (action.type) {
    case "ADD_ITEMS_TO_CART": {
      debugger;
      let arr: any = state ? [...state] : [];
      arr.push(action.payload);
      return arr;
    }
    default:
      return state;
  }
};

const appReducer: any = combineReducers({
  logedInUserDetails: loginDetailsReducer,
  myCartItems: myCartReducers,
});

export const StoreProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = React.useMemo(() => [state, dispatch], [state]);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const [state, dispatch] = useContext(StoreContext);
  console.log("ajith", state, dispatch, useContext(StoreContext));
  return [state, dispatch];
};
