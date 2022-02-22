import axios from "axios";

export const getCategoryList = () => dispatch => {
    axios
        .get("http://localhost:5000/categories")
        .then(res => {
        dispatch({
            type: "GET_CATEOGRIES",
            payload: res.data
        });
        })
        .catch(err => console.log(err));
    }