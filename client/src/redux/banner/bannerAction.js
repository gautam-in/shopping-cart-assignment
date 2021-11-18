import { FETCH_BANNER_REQUEST, FETCH_BANNER_SUCCESS, FETCH_BANNER_FAILURE } from "./bannerType";
import axios from "axios";

export const fetchBannerRequest = () =>{
    return {
        type: FETCH_BANNER_REQUEST
    }
}

export const fetchBannerSuccess = (banner) =>{
    return {
        type: FETCH_BANNER_SUCCESS,
        payload:banner,
        error:''
    }
}

export const fetchBannerFailure = (error) =>{
    return {
        type: FETCH_BANNER_FAILURE,
        banner:[],
        payload: error
    }
}

export const fetchBanner = () =>{
    return (dispatch)=>{
        dispatch(fetchBannerRequest())
         axios.get('http://localhost:5000/banners')
         .then(response => {
             const banner = response.data
             dispatch(fetchBannerSuccess(banner))
         })
         .catch(error=>{
             const errMsg= error.message
             dispatch(fetchBannerFailure(errMsg))
         })
    }
}