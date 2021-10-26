import {
  REMOVE_FROM_CART,
  CREATE_ADD_TO_CART_SUCCESS,
} from "../actions/actionTypes";
import { findItemIndex } from "../../components/UI/atoms/util/getItemIndex";
const initialState = {
  loading: false,
  cartList: [],
  cartItem: 0,
  error: false,
  disable: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ADD_TO_CART_SUCCESS:
      let result = [];
      const index = findItemIndex(state.cartList, action.cartProduct.id);
      if (index === -1) {
        result = [
          ...state.cartList,
          { ...action.cartProduct, count: 1, msg: "added" },
        ];
      } else {
        result = [...state.cartList];

        result[index]["count"] += 1;
      }
      return {
        ...state,
        loading: true,
        cartList: result,
        cartItem: state.cartItem + 1,
      };

    case REMOVE_FROM_CART:
      let removedCarts = [...state.cartList];
      const revomeItemidx = findItemIndex(removedCarts, action.cartProduct.id);
      if (revomeItemidx != -1) {
        removedCarts[revomeItemidx]["count"] -= 1;
        if (removedCarts[revomeItemidx]["count"] == 0) {
          removedCarts.splice(revomeItemidx, 1);
        }
      }
      return {
        ...state,
        cartList: removedCarts,
        cartItem: state.cartItem - 1,
      };

    default:
      return state;
  }
};
export default cartReducer;
