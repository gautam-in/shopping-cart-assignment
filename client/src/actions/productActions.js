import axios from "axios";
import {
    API_URL
} from "../API_URL/apiUrl";


export const getProductList = () => dispatch => {
    axios
        .get(`${API_URL}/products`)
        .then(res => {
            dispatch({
                type: "GET_PRODUCTS",
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}