const initialState = {
    countOfItems: 0,
    addedProductItems: []
}

const CartReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCT_ADDED_IN_CART': return {
            ...state,
            addedProductItems: [...state.addedProductItems, action.payload],
            countOfItems: state.countOfItems + 1
        }
        default: return state;
    }

}
export default CartReducers;