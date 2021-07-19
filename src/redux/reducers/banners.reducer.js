import { bannersConstants } from "../actions/constants";

const initialState = {
    banners: [],
    loading: false,
    error: null,
  };

  const bannersReducer = (state = initialState, action) => {
    switch (action.type) {
      case bannersConstants.GET_ALL_BANNERS_SUCCESS:
        state = {
          ...state,
          banners: action.payload.banners,
        };
        break;
  
      default:
        return state;
    }
    return state;
  };
  
  export default bannersReducer;