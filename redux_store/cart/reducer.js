import {
   TOGGLE_CART,
   ADD_TO_CART_START,
   ADD_TO_CART,
   ADD_TO_CART_ERROR,
   REMOVE_FORM_CART,
} from './constants';
import lodash from "lodash"

const InitialState = {
   isOpen: false,
   addingToCart: false,
   errorMessage: null,
   items: {},
   totalCartItems:0,
}

const calculateCartItems = (state) => {
   let total = 0
   Object.keys(state.items).map((product_id, index) => {
      total += state.items[product_id]
   })
   state.totalCartItems = total
}
 
const cart = (state = InitialState, action) => {
   let copy = { ...state, items: { ...state.items }}
   const { items } = copy
   let product_id = null
   switch (action.type) {
      case TOGGLE_CART:
         copy.isOpen = !copy.isOpen
         return copy
      case ADD_TO_CART_START:
         copy.addingToCart = true
         copy.errorMessage = null
         return copy
      case ADD_TO_CART:
         copy.addingToCart = false
         product_id = action.payload.product_id
         items[product_id] ? (items[product_id]++) : (items[product_id] = 1)
         copy.errorMessage = null
         calculateCartItems(copy)
         return copy
      case ADD_TO_CART_ERROR:
         copy.addingToCart = false
         copy.errorMessage = action.payload.message
          return copy
      case REMOVE_FORM_CART:
         product_id = action.payload.product_id
         items[product_id] > 0 ? (items[product_id]--) : "do nothing"
         if(items[product_id] === 0 ){
            delete items[product_id]
         }
         console.log(items,"reducer")
         copy.errorMessage = action.payload.message
         calculateCartItems(copy)
         return copy
      default:
         return copy
   }
};

export default cart;