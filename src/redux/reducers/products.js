import axiosConfig from '../../utils/axiosConfig';
import { loaderActions } from './loader';

const initialState = [];

const PRODUCT_LIST = 'product/list';
const PRODUCT_SEARCH = 'product/search';
const PRODUCT_UPDATE = 'product/update';

export const productActions = {
  productList: (filter) => (dispatch) => {
    dispatch(loaderActions.showLoader());
    return axiosConfig.get('/products')
      .then((res) => {
        if (filter) {
          const items = res.data.filter((v) => (v.category === filter));
          dispatch({
            type: PRODUCT_SEARCH,
            payload: items,
          });
        } else {
          dispatch({
            type: PRODUCT_LIST,
            payload: res.data,
          });
        }
        dispatch(loaderActions.hideLoader());
      }).catch(() => dispatch(loaderActions.hideLoader()));
  },
  productUpdate: (payload) => ({
    type: PRODUCT_UPDATE,
    payload,
  }),
};

export const products = (state = initialState, { type, payload }) => {
  switch (type) {
  case PRODUCT_LIST:
  case PRODUCT_SEARCH: {
    return [...payload];
  }
  case PRODUCT_UPDATE: {
    const updatedState = state.map((item) => (item.id === payload.id ? payload : item));
    return updatedState;
  }
  default:
    return state;
  }
};
