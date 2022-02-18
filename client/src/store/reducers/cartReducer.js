import { ADD_TO_CART, ADD_TO_CART_SUCCESS, REMOVE_FROM_CART, REMOVE_FROM_CART_SUCCESS } from "../actions/cartAction";


const initialState = {
    cartItems: [],
};

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state};
        case ADD_TO_CART_SUCCESS:
            const itemToAdd = action.payload;
            let existingCartItem = state.cartItems.find(
                (cartItem) => cartItem.id === itemToAdd.id
              );

            if (existingCartItem) {
                let cartItems = state.cartItems.map((cartItem) =>
                    cartItem.id === itemToAdd.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
                );
                return {
                    ...state,
                    cartItems: cartItems
                };
            }
            return {
                ...state,
                cartItems: [...state.cartItems, {...itemToAdd, quantity: 1}],
            };
        
        case REMOVE_FROM_CART:
            return { ...state};
        case REMOVE_FROM_CART_SUCCESS:
            const itemToRemove = action.payload;
            let cartItems = state.cartItems.map((cartItem) =>
                cartItem.id === itemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity ? cartItem.quantity - 1 : 0 }
                : cartItem
            );
            return {
                ...state,
                cartItems: cartItems
            };
        default:
            return state;
    }
}

export default cartReducer;