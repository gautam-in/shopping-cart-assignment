import * as actionTypes from "../actions/actionTypes"
const initstate = {
cartItems:[]
}

const reducer = (state = initstate, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART: {
            debugger
            return {
                ...state,
                cartItems:[...state.cartItems,action.product]
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
}

export default reducer