import loader from './loader';
import { sortCallback } from '../../utils/common';

export const CATEGORY_LIST = 'category/list';

const category = {
  categoryList: () => async (dispatch, getState, api) => {
    dispatch(loader.showLoader());
    return api.get('/categories')
      .then((res) => {
        const categories = res.data.filter((ctg) => ctg.order > -1)
          .sort(sortCallback('order'));

        dispatch({
          type: CATEGORY_LIST,
          payload: categories,
        });
        dispatch(loader.hideLoader());
      }).catch(() => dispatch(loader.hideLoader()));
  },
};

export default category;
