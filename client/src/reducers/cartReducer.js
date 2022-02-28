const initialState = {
    cart: []
}

export default function (state = initialState, {
    type,
    payload
}) {
    switch (type) {

        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, payload]
            }

            default:
                return state
    }
}