let initialState = {
    allBanners: [],
    fetchError: false,
    fetchErrorMessage: null,
    isLoading : true
  };
export default function bannerReducer(state = initialState, action) {
    switch (action.type) {
      case "FETCH_ALL_BANNERS":
        return { ...state, allBanners: [...action.payload.banners], isLoading: false };
      case "FETCH_ALL_BANNERS_ERROR": 
        return { ...state, fetchErrorMessage : 'Something went wrong while fetching Banners', isLoading: true}
      default:
        return state;
    }
  }
  