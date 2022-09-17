import { actionType } from "../actions/cartActions";



const INTIALSTATE = {
    cartItems:[]
}

export const cartReducer = (state = INTIALSTATE, action) => {
    const {type, payload} = action
    console.log(payload,"payload")
    switch (type) {
        case actionType.ADD_TOCART:
            return { ...state, cartItems: [...state.cartItems, { ...payload, qty: 1 }] };
        default:
            return state
    }
}