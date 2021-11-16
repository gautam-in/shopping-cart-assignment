import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
    cart: []
}
const shopReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
    case actionTypes.ADD_TO_CART : 
        let index = state.cart.findIndex(obj => obj.id === action.payload.id);
        if(index === -1) {
            let obj = {...action.payload, quantity: 1};
            return {...state, cart: [...state.cart, obj]};
        }
        else {
            let obj = {...state};
            obj.cart[index].quantity++;
            return obj;
        }

    case actionTypes.INCREMENT_QUANTITY : 
        let index2 = state.cart.findIndex(obj => obj.id === action.payload.id);
        const newarr = [...state.cart];
        newarr[index2].quantity++;
        return {...state, cart: newarr};

    
    case actionTypes.DECREMENT_QUANTITY : 
        let index3 = state.cart.findIndex(obj => obj.id === action.payload.id);
        const newarr2 = [...state.cart];
        let qty = newarr2[index3].quantity;
        if(qty>1) {
            newarr2[index3].quantity--;
        }
        else {
            newarr2.splice(index3, 1);
        }
        return {...state, cart: newarr2};
    
    default : return state;
    }
}
export default shopReducer;