import * as t from '../types';

const defaultState = {
    cartCount:0,
    open:-1,
    cartData:[]
}
const cart = (state = defaultState,action)=>{
    console.log("action.tpe",action)
    switch(action.type){
        case t.CART_COUNT_INCREMENT:
            return {...state,cartCount:action.payload}
        case t.ADD_TO_CART:
            console.log("adnkur",action)
            return {...state,cartData:action.payload}    
        case t.CART_INFO:
            return {...state,cartCount:action.payload}
        case t.CART_OPEN:
            return {...state,open:action.payload}
        case t.CART_CLOSE:
            return {...state,open:action.payload}            
        default:
            return state;
    }
}

export default cart