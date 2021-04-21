import { UPDATE_CART_ITEM, REMOVE_CART_ITEM, SET_FILTER } from '../action/actionTypes'

const appState = {
    item: 0,
    cart: [],
    filter: null
};

function reducer(state = appState, action) {
    switch (action.type) {
        case UPDATE_CART_ITEM:
            const found = state.cart.find(element => element.id === action.payload.id);

            if (found) {

                return {
                    ...state, item: state.item + 1, cart: state.cart.map(ele => {
                        if (ele.id === action.payload.id) {
                            return { ...ele, qty: ele.qty + 1 }
                        };
                        return ele;
                    })
                };
            } else {

                return {
                    ...state, item: state.item + 1, cart: state.cart.concat({ ...action.payload, qty: 1 })
                };
            }



        case REMOVE_CART_ITEM:
            const findItem = state.cart.find(element => element.id === action.payload.id);
            if (findItem) {
                if (findItem.qty > 1) {
                    return {
                        ...state, item: state.item - 1, cart: state.cart.map(ele => {
                            if (ele.id === action.payload.id) {
                                return { ...ele, qty: ele.qty - 1 }
                            };
                            return ele;
                        })
                    };
                } else {

                    return {
                        ...state, item: state.item - 1, cart: state.cart.filter(ele =>
                            ele.id !== action.payload.id
                        )
                    };

                }

            } else {

                console.log("Item cannot be identified !")
                return { ...state }
            }

        case SET_FILTER:
            return {
                ...state, filter: action.payload
            }
        default:
            return appState;
    }
}

export default reducer;