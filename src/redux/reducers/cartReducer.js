import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/action-types';
export const initialState = {
  cartItem: 0,
  cartList: []
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const duplicateObj = state.cartList.find((item) => item.id === action.product.id);
      let result = [];
      if (duplicateObj == undefined) {
        result = [...state.cartList, { ...action.product, count: 1 }];
      } else {
        result = state.cartList.map((item) => {
          if (item.id == duplicateObj.id) {
            item.count = item.count + 1;
          }
          return item;
        });
      }
      return {
        ...state,
        cartList: result,
        cartItem: state.cartItem + 1
      };
    case REMOVE_FROM_CART:
      let removedCarts = state.cartList
        .map((product) =>
          product.id === action.product.id ? { ...product, count: product.count - 1 } : product
        )
        .filter((item) => item.count != 0);
      return {
        ...state,
        cartList: removedCarts,
        cartItem: state.cartItem - 1
      };

    default:
      return state;
  }
};
