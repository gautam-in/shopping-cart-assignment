import {actionCreator, createRequestActionTypes} from "../utility.js";

const handleCart = createRequestActionTypes('HANDLE_CART_ACTIONS')

export function handleCartAction(payload) {
    return (dispatch) => {
        dispatch(actionCreator(handleCart.SUCCESS, payload));
    }
}