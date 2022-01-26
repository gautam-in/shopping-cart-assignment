import { REGISTER, LOGGEDIN, ADDTOCART } from './actionTypes'

const INITIAL_STATE = {
    register: false,
    loggedIn: false,
    cart: {},
    cartCount: 0
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state, register: true,
            };
        case LOGGEDIN:
            return {
                ...state, loggedIn: true
            };
        case ADDTOCART:
            console.log("Reducer", action);
            const updatedCart = state.cart;
            updatedCart[action.id] = action.cartItem;
            // return Object.assign({}, state, {cart:updatedCart, cartCount: Object.keys(updatedCart).length})
            console.log("updatedCart", updatedCart);
            return {
                ...state, cart: updatedCart, cartCount: Object.keys(updatedCart).length
              };

        default: return state;
    }
};
export default reducer;