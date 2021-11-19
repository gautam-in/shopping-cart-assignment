import axios from "axios"

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
        axios.get('http://localhost:5000/banners', { headers: {'Content-Type':'application/json'}})
        .then(res => {
            dispatch(fetchAllBanners(res.data))
        })
        .catch(err => dispatch(fetchAllBannersError())) 
    }
}