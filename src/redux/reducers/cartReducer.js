import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/action-types';
import { findItemIndex } from '../../shared/utils';
export const initialState = {
  cartItem: 0,
  cartList: []
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const index = findItemIndex(state.cartList, action.product.id);
      let result = [];
      if (index == -1) {
        result = [...state.cartList, { ...action.product, count: 1 }];
      } else {
        result = [...state.cartList];
        result[index]['count'] += 1;
      }
      return {
        ...state,
        cartList: result,
        cartItem: state.cartItem + 1
      };
    case REMOVE_FROM_CART:
      let removedCarts = [...state.cartList];
      const itemidx = findItemIndex(removedCarts, action.product.id);
      if (itemidx != -1) {
        removedCarts[itemidx]['count'] -= 1;
        if (removedCarts[itemidx]['count'] == 0) {
          removedCarts.splice(itemidx, 1);
        }
      }
      return {
        ...state,
        cartList: removedCarts,
        cartItem: state.cartItem - 1
      };

    default:
      return state;
  }
};
