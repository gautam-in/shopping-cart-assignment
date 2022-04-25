import Axios from "axios";
import {store} from '../index';


export const addtocart = (id) => async(dispatch) => {
    debugger;
    console.log(id)
    Axios.post('http://localhost:5000/addToCart', id)
        .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
            const state = store.getState();
            const product = state.products.filter((product) => product.id === id);
            console.log(product)
            dispatch({
                type: 'ADDTOCART',
                payload: product[0]
            })
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
}