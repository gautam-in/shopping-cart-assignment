import { shopActions } from "../actions/shopActions";
export const INITIAL_STATE = {
  showCart: false,
  cartItems: [],
  itemCount: 0,
  shopCategories: [],
};

export const shopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case shopActions.SHOW_MINICART:
      return { ...state, showCart: payload };
    case shopActions.SET_CARTITEMS:
      return {
        ...state,
        cartItems: [...payload.cartItems],
        itemCount: payload.itemCount,
      };
    case shopActions.SET_CATEGORIES:
      return { ...state, shopCategories: [...payload] };
    default:
      return { ...state };
  }
};
