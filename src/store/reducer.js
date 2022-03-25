import get from "lodash/get";
import { SET_FILTER, DECREAMENT, INCREAMENT, LOGIN, ADD_USER } from "./action";

const appState = {
    filter: null,
    item: 0,
    cartItems: [],
    isLogin: false,
    user: []
}

const reducer = (state = appState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_FILTER:
            return {
                ...state,
                filter: payload,
            };
        case INCREAMENT:
            const present = state.cartItems.find((cart) => cart.id === get(payload, "id"));
            if (present) {
                const newList = state.cartItems.map((cart) => {
                    if (cart.id === get(payload, "id")) {

                        return {
                            ...cart, qty: cart.qty + 1
                        };

                    }
                    return cart;
                });
                return {
                    ...state,
                    cartItems: newList,
                    item: state.item + 1
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems,{ ...action.payload, qty: 1 }],
                    item: state.item + 1
                }
            }
        case DECREAMENT: {
            const qty = state.cartItems.find((cart) => {
                if ((cart.id === get(payload, "id")) && (cart.qty === 1)) {
                    return true;
                }
                return false;
            })
            if (qty) {
                const newList = state.cartItems.filter((cart) => cart.id !== get(payload, "id"));
                return {
                    ...state,
                    cartItems: newList,
                    item: state.item - 1
                }
            }

            else {
                const newList = state.cartItems.map((cart) => {
                    if (cart.id === get(payload, "id")) return { ...cart, qty: cart.qty - 1 }
                    return cart;
                });
                return {
                    ...state,
                    cartItems: newList,
                    item: state.item - 1
                }
            }
        }

        case LOGIN:
            return { ...state, isLogin: payload };
        case ADD_USER:
            return {
                ...state,
                user: payload
            };
        default:
            return appState;
    }
}

export default reducer;