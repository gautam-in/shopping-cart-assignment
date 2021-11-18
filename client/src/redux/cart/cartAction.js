import { ADD_TO_CART ,REMOVE_FROM_CART ,SET_SHOW_CART ,DECREASE_CART ,GET_TOTAL} from './cartType'


export const addToCart = (product) =>{
    console.log("oooo", product)
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const setShowCart = (showCard) =>{
    return {
        type: SET_SHOW_CART,
       payload: showCard
    }
}

export const removeFromCart = (product) =>{
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}

export const decreaseCart = (product) =>{
    return {
        type: DECREASE_CART,
        payload: product
    }
}

export const getTotal = () =>{
    console.log("inside get total")
    return {
        type: GET_TOTAL,
       // payload: number
    }
}

