import { ADD_TO_CART } from "../actions/productAction";
import { INCREASE_QUANTITY, DECREASE_QUANTITY } from "../actions/cartAction";

const intialState = {
    items:[],
    totalAmount:0
};

export default (state = intialState,action) => {
    let itemsArray = [];
    let cartItem;
    let price;
    switch(action.type) {
        case ADD_TO_CART:
            cartItem = state.items.find(p => p.id === action.id);
            if(cartItem){
               state.items.map((item)=>{
                   if(item.id === action.id){
                       item.quantity = item.quantity + 1;
                       item.amount = item.amount + item.price;
                   }
                   itemsArray.push(item);
               })
                return{
                    items:itemsArray,
                    totalAmount:state.totalAmount + action.data.price
                }
            }
            else{
                action.data.quantity = 1;
                action.data.amount = action.data.price;
                return{
                    items:state.items.concat(action.data),
                    totalAmount:state.totalAmount + action.data.price
                }
            }
        case INCREASE_QUANTITY:
            state.items.map((item)=>{
                if(item.id === action.id){
                    price = item.price;
                    item.quantity = item.quantity + 1;
                    item.amount = item.amount + price;
                }
                itemsArray.push(item);
            })
                return{
                    items:itemsArray,
                    totalAmount:state.totalAmount + price
                }
        case DECREASE_QUANTITY:
            state.items.map((item)=>{
                if(item.id === action.id){
                    price = item.price;
                    item.quantity = item.quantity - 1;
                    item.amount = item.amount - price;
                }
                if(item.quantity !== 0){
                    itemsArray.push(item);
                }
            })
                return{
                    items:itemsArray,
                    totalAmount:state.totalAmount - price
                }
    }

    return state
}