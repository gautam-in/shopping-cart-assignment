import { BANNER_LIST } from '../actions/banner';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  if (type === BANNER_LIST) {
    return [...payload];
  }
  return state;
};
