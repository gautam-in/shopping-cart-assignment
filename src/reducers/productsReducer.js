const initialState = [];

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS': return action.payload
        default: return [...state]
    }
}