import { ADD_TO_CART ,REMOVE_FROM_CART ,SET_SHOW_CART ,DECREASE_CART ,GET_TOTAL} from './cartType'

const initialState = {
    showCart: false,
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    cartTotalQuantity: 0, // total no of products
    cartTotalAmount: 0,
}


const cartReducer = (state= initialState, action) =>{
    switch(action.type){
        
        case ADD_TO_CART: 
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
              );
              
              // if the product is already present
              if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                return {
                    ...state,
                    
                }
              } else {
                // if the product is not present create the item with cartQuantity and push
                const tempProduct = { ...action.payload, cartQuantity: 1 };
               // state.cartItems.push(tempProduct); // pushing the item to cart
                const temp = [...state.cartItems]
                temp.push(tempProduct);
                localStorage.setItem("cartItems", JSON.stringify(temp));
                return {
                    ...state,
                    cartItems: [...temp]
                }
              }            
        case REMOVE_FROM_CART: {
            const nextCartItems = state.cartItems.filter(
              (cartItem) => cartItem.id !== action.payload.id
            );
      
            state.cartItems = nextCartItems;
            // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          }
        case SET_SHOW_CART: 
        return {
            ...state,
            showCart: action.payload || !state.showCart,
          };
        case DECREASE_CART: {
            const currentCartItemIndex = state.cartItems.findIndex(
              (cartItem) => cartItem.id === action.payload.id
            );
          
      
            if (state.cartItems[currentCartItemIndex].cartQuantity > 1) {
              // decrease the quantity
              state.cartItems[currentCartItemIndex].cartQuantity -= 1;
              return {
                ...state,
                
            }
            } else {
              const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
              );
      
              state.cartItems = nextCartItems;
              localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
              return {
                ...state,
            }
            }
          }
        case GET_TOTAL: {
            let { total, quantity } = state.cartItems.reduce(
              (cartTotal, cartItem) => {
                // got the price and quantity of current item one by one
                const { price, cartQuantity } = cartItem;
      
                // calculate total amount for current item
                const itemTotal = price * cartQuantity;
      
                //
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
                console.log(cartTotal, "cartTotal")
                return cartTotal;
              },
              {
                total: 0,
                quantity: 0,
              }
            );
            {console.log(total, quantity)}
            {console.log("oooopss", quantity)}
      
            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
          }
        default: return state;
    }

}

export default cartReducer

