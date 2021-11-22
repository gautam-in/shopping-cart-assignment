import {createRequestActionTypes} from "../utility.js";

const handleCart = createRequestActionTypes('HANDLE_CART_ACTIONS')

const initialState = {
  itemList: [],
  loading: false
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case handleCart.REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case handleCart.SUCCESS: {
      return {
        ...state,
        loading: false,
        itemList: payload
      };
    }
    case handleCart.FAILURE: {
        return {
          ...state,
          loading: false,
        };
      }

    default:
      return state;
    }

};