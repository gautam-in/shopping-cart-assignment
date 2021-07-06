import * as t from '../types';

const main = (state={ cartCount:0,open:true },action)=>{
    switch(action.type){
        case t.CART_COUNT_INCREMENT:
            return {...state,cartCount:action.payload}
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

export default main