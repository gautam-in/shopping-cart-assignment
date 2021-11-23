const cartReducer = function (state = [], action) {
    switch (action.type) {
        case "ADDCART":
            return [...state, action.payload];
        case "REMOVECART":
            let xCart = state;
            xCart.length > 0 && xCart.filter(item => item.id !== action.payload.id)
            return xCart;
        case "CLEARCART":
            return [];
        default:
            return state;
    }
};

export default cartReducer