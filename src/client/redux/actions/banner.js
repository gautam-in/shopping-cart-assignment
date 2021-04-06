import loader from './loader';

export const BANNER_LIST = 'banner/list';

const banner = {
  bannerList: () => async (dispatch, getState, api) => {
    dispatch(loader.showLoader());
    const res = await api.get('/banners');
    dispatch({
      type: BANNER_LIST,
      payload: res.data,
    });
    dispatch(loader.hideLoader());
  },
};

export default banner;
