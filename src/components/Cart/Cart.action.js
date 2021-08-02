import { READ_CART, ADD_CART, RESET_CART, UPDATE_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from './Cart.constants';

export const readCart = (payload) => {
    return{
        type: READ_CART,
        payload
    }
}

export const AddCart = (payload) => {
    return {
        type: ADD_CART,
        payload
    }
}
export const UpdateCart = (payload) => {
    return {
        type: UPDATE_CART,
        payload
    }
}
export const DeleteCart = (payload) => {
    return {
        type: DELETE_CART,
        payload
    }
}

export const IncreaseQuantity = (payload) => {
    return {
        type: INCREASE_QUANTITY,
        payload
    }
}

export const DecreaseQuantity = (payload) => {
    return { 
        type: DECREASE_QUANTITY,
        payload
    }
}

export const resetCart = () => {
    return { 
        type: RESET_CART,
    }
}