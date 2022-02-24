import BannersActionTypes from "./banners.types";

export const fetchBannerDataStart = () => ({
    type: BannersActionTypes.FETCH_BANNERS_START
});

export const fetchBannerDataSuccess = (bannerData) =>{
    return(
        {
            type: BannersActionTypes.FETCH_BANNERS_SUCCESS,
            payload: bannerData
        }
    )
} 
export const fetchBannerDataFailure = (errorMessage) => ({
    type:BannersActionTypes.FETCH_BANNERS_FAILURE,
    payload: errorMessage
})

