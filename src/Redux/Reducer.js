import { ADD_TO_CART, INCREASE_QUANTITY ,DECREASE_QUANTITY } from "./Constants";

const initialState={cart:[]}


const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const productExist=state.cart.some((product)=>product.id ===action.payload.id)
            if(!productExist){
                action.payload.quantity=1;
                return {
                    ...state,cart:[...state.cart,action.payload]
                } 
            }
            else{
               const newCartItem= state.cart.map((items)=>{
                    if(items.id===action.payload.id){
                        items.quantity+=1;
                    }
                    return items
                })
                // console.log(newCartItem);
                return {
                    ...state,cart:newCartItem
                }
            }
        case INCREASE_QUANTITY:
            return{
                ...state,
                cart:state.cart.map((item)=>{
                   return item.id===action.payload ?{...item,quantity:item.quantity+1} : item
                })
            }
            case DECREASE_QUANTITY:
                return{
                    ...state,
                    cart:state.cart.map((item)=>{
                    //     if(item.id ===action.payload){
                    //         if(item.quantity !== 1)
                    //         {
                    //             item.quantity-=1
                    //         }
                    //     }
                    // return item;
                      return  item.id===action.payload ?
                        {...item,
                        quantity:item.quantity-1  }
                        : item
                    })
                .filter((item)=>item.quantity !==0)
                }
    
        default:
            break;
    }
}

export default reducer