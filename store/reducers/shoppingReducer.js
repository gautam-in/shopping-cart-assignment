import {
  FETCH_BANNERS,
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
  RESET_STORE,
} from '../../utils/constants';


const shoppingReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BANNERS:
      return { ...state, banners: action.payload };
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case RESET_STORE: {
      state = {};
      return state;
    }
    default:
      return state;
  }
};

export default shoppingReducer;
