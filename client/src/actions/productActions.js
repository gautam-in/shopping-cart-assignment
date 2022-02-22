import axios from "axios";

export const getProductList = () => dispatch => {
    axios
        .get("http://localhost:5000/products")
        .then(res => {
        dispatch({
            type: "GET_PRODUCTS",
            payload: res.data
        });
        })
        .catch(err => console.log(err));
    }
