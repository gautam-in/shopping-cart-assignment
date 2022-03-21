import get from "lodash/get";
import { UPDATE_CART_ITEM, REMOVE_CART_ITEM, SET_FILTER } from "./action";

const appState = {
  item: 0,
  cart: [],
  filter: null,
};

const reducer = (state = appState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_CART_ITEM:
      if (state.cart.find((e) => e.id === get(payload, "id"))) {
        return {
          ...state,
          item: state.item + 1,
          cart: state.cart.map((ele) => {
            if (ele.id === get(payload, "id")) {
              return { ...ele, qty: ele.qty + 1 };
            }
            return ele;
          }),
        };
      } else {
        return {
          ...state,
          item: state.item + 1,
          cart: state.cart.concat({ ...payload, qty: 1 }),
        };
      }

    case REMOVE_CART_ITEM:
      const findItem = state.cart.find(
        (element) => element.id === get(payload, "id")
      );
      if (findItem) {
        if (findItem.qty > 1) {
          return {
            ...state,
            item: state.item - 1,
            cart: state.cart.map((ele) => {
              if (ele.id === get(payload, "id")) {
                return { ...ele, qty: ele.qty - 1 };
              }
              return ele;
            }),
          };
        } else {
          return {
            ...state,
            item: state.item - 1,
            cart: state.cart.filter((ele) => ele.id !== get(payload, "id")),
          };
        }
      } else {
        console.log("Item cannot be identified !");
        return { ...state };
      }

    case SET_FILTER:
      return {
        ...state,
        filter: payload,
      };
    default:
      return appState;
  }
}

export default reducer;