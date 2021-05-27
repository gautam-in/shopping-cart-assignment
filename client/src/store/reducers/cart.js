import { ADD_TO_CART } from '../actionTypes';

const initialState = [];

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let item = action.payload.item;

            // for new item
            if ([...state.filter(element => element.name === item.name)].length === 0) {
                state = [...state, {...item, total: item.price}];
                return state;
            } 
            
            // for existing item
            else {
                state = [...[...state.map(element => {
                    if (element.name === item.name) {
                        element.quantity += item.quantity;
                        element.total = element.price * element.quantity;
                    }
                    return element;
                })].filter(elem => elem.quantity !== 0)];
                return state;

            }
        default:
            return state;
    }
}