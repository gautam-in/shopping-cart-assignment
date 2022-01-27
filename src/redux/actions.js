import { postData } from '../services';
import { REGISTER, LOGIN, ADDTOCART, SHOWMODAL, REMOVEFROMCART } from './actionTypes';

export const loginAction = (email) => {
    return {
        type: LOGIN,
        email
    }
};

export const registerAction = (data) => {
    return {
        type: REGISTER,
        data
    }
};

export const addToCartAction = (id, cartItem, modalValue=false) => {
    return async dispatch => {
        try{
            const response = await postData('/addToCart', {id, cartItem});
            dispatch(addToCartActionAsync(id, cartItem));
            dispatch(showModal(modalValue))
        } catch (err) {
            console.log(err);
        }
    };
};

export const addToCartActionAsync = (id, cartItem) => {
    return {
        type: ADDTOCART,
        id,
        cartItem,
    }
};

export const removeFromCartAction = (id) => {
    return {
        type: REMOVEFROMCART,
        id,
    }
};

export const showModal = (modalValue) => ({
    type: SHOWMODAL,
    modalValue
  });