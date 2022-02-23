import axios from "axios";
import {
    API_URL
} from "../API_URL/apiUrl";



export const getBannerList = () => dispatch => {
    axios
        .get(`${API_URL}/banners`)
        .then(res => {
            dispatch({
                type: "GET_BANNERS",
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}