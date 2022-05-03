import axios from 'axios'
import { BannerActionTypes } from '../constants/bannerAction_types'
export const getBannerDetails=()=>{
    return async(dispatch)=> {
        const data=await axios.get('http://localhost:5000/banners').catch(err=>{console.log(err)})
        dispatch(setBannerDetails(data.data))
    }
}

const setBannerDetails=(details)=>{
    return {
        type:BannerActionTypes.GET_BANNER_DETAILS,
        payload:details
    }
}