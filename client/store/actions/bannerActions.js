import { backendInstance } from "../../backend"

export const fetchAllBanners = (data) => {
    return {
        type : 'FETCH_ALL_BANNERS',
        payload : {
            banners : data
        }
    }
}

export const fetchAllBannersError = () => {
    return {
        type : 'FETCH_ALL_BANNERS_ERROR'
    }
}

export function asyncFetchBanners() {
    return dispatch => {
        backendInstance.get('/banners')
        .then(res => {
            dispatch(fetchAllBanners(res.data))
        })
        .catch(err => dispatch(fetchAllBannersError())) 
    }
}