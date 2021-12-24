import { POST_CART_ITEM_ERROR, POST_CART_ITEM_LOADING, POST_CART_ITEM_SUCCESS } from '../actions/actionTypes';

const initialState = {
  postCartItemData: null,
  error: { postCartItem: null },
  loading: { postCartItem: false },
};

export const postCartItemReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case POST_CART_ITEM_LOADING:
      return {
        ...state,
        loading: { ...state.loading, postCartItem: true },
        error: { ...state.error, postCartItem: null },
      };
    case POST_CART_ITEM_SUCCESS:
      return {
        ...state,
        postCartItemData: action.payload,
        loading: { ...state.loading, postCartItem: false },
      };
    case POST_CART_ITEM_ERROR:
      return {
        ...state,
        loading: { ...state.loading, postCartItem: false },
        error: { ...state.error, postCartItem: action.payload },
      };
    default:
      return state;
  }
};
