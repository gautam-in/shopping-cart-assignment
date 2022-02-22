import axios from "axios";

export const getBannerList = () => dispatch => {
    axios
        .get("http://localhost:5000/banners")
        .then(res => {
            dispatch({
                type: "GET_BANNERS",
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}