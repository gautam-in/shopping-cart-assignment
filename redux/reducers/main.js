import * as t from '../types';

const main = (state={ cartCount:0 },action)=>{
    console.log("action is",  action)
    switch(action.type){
        case t.CART_COUNT_INCREMENT:
            return {...state,cartCount:action.payload}
        case t.CART_INFO:
            return {...state,cartCount:action.payload}    
        default:
            return state;
    }
}

export default main