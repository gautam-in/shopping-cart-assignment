import loader from './loader';

export const PRODUCT_LIST = 'product/list';
export const PRODUCT_SEARCH = 'product/search';
export const PRODUCT_UPDATE = 'product/update';

const product = {
  productList: (filter) => (dispatch, getState, api) => {
    dispatch(loader.showLoader());
    return api.get('/products')
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
        dispatch(loader.hideLoader());
      }).catch(() => dispatch(loader.hideLoader()));
  },
  productUpdate: (payload) => ({
    type: PRODUCT_UPDATE,
    payload,
  }),
};

export default product;
