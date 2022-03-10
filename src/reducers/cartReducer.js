import { ADD_PRODUCT, DECREASE_QUANTITY, REMOVE_PRODUCT } from './../actions/types';

const initialState = {
    products: []
};

export default function(state = initialState.products, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            const alreadyInCart = state.filter(product => product.id === action.payload.id).length;
            if(alreadyInCart) {
                return state.map(product => { 
                    if(product.id === action.payload.id) {
                        product.quantity += 1;
                        product.total = product.quantity * product.price;
                    }
                    return product;
                });
            } else {
                const newProduct = action.payload;
                newProduct.quantity = 1;
                newProduct.total = newProduct.price;
                return [
                    ...state,
                    {...newProduct}
                ]
            }
        case REMOVE_PRODUCT:
            const newState = [...state];
            const indexOfRemovedProduct = newState.findIndex(product => product.id === action.payload);
            newState.splice(indexOfRemovedProduct, 1);
            return [...newState];
        case DECREASE_QUANTITY:
            return state.map(product => { 
                if(product.id === action.payload.id) {
                    product.quantity -= 1;
                    product.total = product.quantity * product.price;
                }
                return product;
            });
        default:
            return state;
    }
}