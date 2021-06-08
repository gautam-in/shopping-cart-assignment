import {
  ADD_TO_CART,
  OPEN_CART_OVERLAY,
  CLOSE_CART_OVERLAY,
  CART_ITEMS,
} from "../constant/topic";

const Reducer = (state, action) => {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        ...action.payload,
      };

    case OPEN_CART_OVERLAY:
      return {
        ...state,
        ...action.payload,
      };

    case CLOSE_CART_OVERLAY:
      return {
        ...state,
        ...action.payload,
      };

    case CART_ITEMS:
      return {
        ...state,
        ...action.payload,
      };
  }
};

export default Reducer;
