import * as actionTypes from './actions';

const initialState = {
    ingredients: null,
    cartItems:{},
    totalItems:0,
    totalPrice: 0,
    isLoggedIn: true
};

const reducer = (state = initialState, action) => {
    switch(action.type){

        case actionTypes.ADD_ITEM:            
            let newCartItems = Object.assign({},state.cartItems);
            if(newCartItems[action.item.id]){
                console.log("Item Present!");
                newCartItems[action.item.id].quantity = newCartItems[action.item.id].quantity + 1
            }
            else{
                newCartItems[action.item.id] = {
                    quantity: 1,
                    id: action.item.id,
                    name:action.item.name,
                    imageURL:action.item.imageURL,
                    price:action.item.price
            }
            }
            return {
                ...state,
                cartItems: newCartItems,
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + action.item.price
            }
            break;
        
        case actionTypes.INCREMENT:

            let newItems = Object.assign({},state.cartItems);
            newItems[action.item.id].quantity = newItems[action.item.id].quantity + 1;
            return {
                ...state,
                cartItems: newItems,
                totalItems : state.totalItems + 1,
                totalPrice: state.totalPrice + action.item.price
            }

        case actionTypes.DECREMENT :
            let items = Object.assign({},state.cartItems);
            if(items[action.item.id].quantity ==1){
                delete items[action.item.id]
                return {
                    ...state,
                    cartItems:items,
                    totalItems: state.totalItems - 1,
                    totalPrice: state.totalPrice - action.item.price
                }
            }
            else{
                items[action.item.id].quantity = action.item.quantity - 1;
                return {
                    ...state,
                    cartItems: items,
                    totalItems: state.totalItems - 1,
                    totalPrice: state.totalPrice - action.item.price
                }
            }
        case actionTypes.LOGIN:
            console.log("REDUCER LOGIn")
            return{
                ...state,
                isLoggedIn: true
            }
        default :
            return state;
    }
};

export default reducer;