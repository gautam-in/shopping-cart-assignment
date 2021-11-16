export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

export const increaseQty = (productId) => {
    return async (dispatch) => {
        dispatch({type:INCREASE_QUANTITY,id:productId})
    }
}

export const decreaseQty = (productId) => {
    return async (dispatch) => {
        dispatch({type:DECREASE_QUANTITY,id:productId})
    }
}