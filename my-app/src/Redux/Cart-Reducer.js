
import Initial_State from "./Initial-state";
import CartActionType from "./Cart-ActionType";
import { addItemToCart,totalItemsInCart,itemQuantity,removeItemFromCart } from "./Cart-util";

const INTIAL_STATE= Initial_State

const CartReducer = (state = INTIAL_STATE,action) =>{
    switch(action.type)
    {
        case CartActionType.TOGGLE_CART_HIDDEN :
            return{
                ...state,
                hidden:!state.hidden
            }
        
        case CartActionType.ADD_ITEM_TO_CART :
            return {
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        case CartActionType.TOTAL_ITEMS_COST :
            return {
                ...state,
                totalCost:totalItemsInCart(state.cartItems)
            }
        case CartActionType.ITEMS_QUANTITY :
            return {
                ...state,
                itemsQuantity:itemQuantity(state.cartItems)
            }
        case CartActionType.REMOVE_ITEM_FROM_CART :
            return {
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            }

        default :
            return state
    }
}

export default CartReducer