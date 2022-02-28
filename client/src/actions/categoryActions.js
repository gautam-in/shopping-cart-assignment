import axios from "axios";
import { API_URL } from "../API_URL/apiUrl";

export const getCategoryList = () => dispatch => {
    axios
        .get(`${API_URL}/categories`)
        .then(res => {
        dispatch({
            type: "GET_CATEOGRIES",
            payload: res.data
        });
        })
        .catch(err => console.log(err));
    }