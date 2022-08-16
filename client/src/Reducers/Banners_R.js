import { actionTypes } from "../Action";
// const BANNERS_INITIAL_STATE = {
//   banners: [],
// };
const getBannersReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_BANNERS:
      return action.payload;
    default:
      return state;
  }
};

export default getBannersReducer;
