import { SHOW_LOADER, HIDE_LOADER } from '../actions/loader';

const initialState = {
  isLoading: false,
};

export default (state = initialState, { type }) => {
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
