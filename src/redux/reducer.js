import {
    REGISTER,
    ADDTOCART,
    SHOWMODAL,
    REMOVEFROMCART,
    RESET,
    LOGIN,
    LOGOUT
} from './actionTypes';

const INITIAL_STATE = {
    userName: null,
    registeredData: {
        "sur@1": {
            fname: "Suresh",
            lname: "Vakkalakula",
            password: "12345678"
        }
    },
    loggedIn: false,
    modalValue: false,
    cart: {},
    cartCount: 0,
    totalAmount: 0
};

const findTotalAmount = (cartItems) => {
    let totalValue = 0;
    Object.keys(cartItems).forEach(cartId => {
        const cartItem = cartItems[cartId];
        totalValue += cartItem.price * cartItem.count;
    });
    return totalValue;
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER:
            const registeredData = { ...state.registeredData };
            registeredData[action.data.email] = action.data;

            return {
                ...state, registeredData: { ...registeredData },
            };

        case LOGIN:
            return {
                ...state, loggedIn: true, userName: state.registeredData[action.email].fname
            };

        case ADDTOCART:
            const updatedCart = state.cart;
            updatedCart[action.id] = action.cartItem;

            return {
                ...state,
                cart: { ...updatedCart },
                totalAmount: findTotalAmount(updatedCart),
                cartCount: Object.keys(updatedCart).length
            };

        case REMOVEFROMCART:
            const removeCart = state.cart;
            delete removeCart[action.id];

            return {
                ...state,
                cart: { ...removeCart },
                totalAmount: findTotalAmount(removeCart),
                cartCount: Object.keys(removeCart).length
            };

        case SHOWMODAL:
            return {
                ...state, modalValue: action.modalValue
            };

        case RESET:
            return {
                ...state, ...INITIAL_STATE,
                cart: {}, registeredData: state.registeredData,
                userName: state.userName,
                loggedIn: state.loggedIn
            }

        case LOGOUT:
            return {
                ...state, 
                ...INITIAL_STATE, 
                cart: {}, 
                registeredData: state.registeredData
            }

        default: return state;
    }
};
export default reducer;