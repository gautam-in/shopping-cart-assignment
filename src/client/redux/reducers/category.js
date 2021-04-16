import { CATEGORY_LIST } from '../actions/category';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  if (type === CATEGORY_LIST) {
    return [...payload];
  }
  return state;
};
