import Axios from "axios";

export const bannerList = () => async (dispatch) => {
    const { data } = await Axios.get("http://localhost:5000/banners");
    dispatch({
        type: 'FETCH_BANNERS',
        payload: data
    })
}


