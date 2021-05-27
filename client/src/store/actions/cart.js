import { ADD_TO_CART } from '../actionTypes';
import endpoints from '../../config/endpoints';

export function addToCart(payload) {
    return (dispatch) => {
        fetch(endpoints.ADD_TO_CART, {
            method: 'POST',
            body: {
                productID: payload.item.id
            }
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: ADD_TO_CART,
                payload
            })
        })

    }
    
}