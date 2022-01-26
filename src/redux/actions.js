import {REGISTER, LOGGEDIN, ADDTOCART} from './actionTypes';

export const addToCartAction = (id, cartItem) => ({
    type: ADDTOCART,
    id,
    cartItem
});