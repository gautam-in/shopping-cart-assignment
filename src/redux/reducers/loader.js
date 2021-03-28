const initialState = {
  isLoading: false,
};

const SHOW_LOADER = 'loader/show';
const HIDE_LOADER = 'loader/hide';

export const loaderActions = {
  showLoader: () => ({
    type: SHOW_LOADER,
  }),
  hideLoader: () => ({
    type: HIDE_LOADER,
  }),
};

export const loader = (state = initialState, { type }) => {
  switch (type) {
  case SHOW_LOADER: {
    return { isLoading: true };
  }
  case HIDE_LOADER: {
    return { isLoading: false };
  }
  default:
    return state;
  }
};
