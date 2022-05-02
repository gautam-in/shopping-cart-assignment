import {totalProductPrice,getAllProduct, categorydata,addData, updateData,removeData,emptyData, logout} from './action-constants'
const initialState={
    products:[],
    category:[],
    cartList:[],
    count:0,
    total:0,
    logout:false
 }

export const productReducer=(state=initialState,action)=>{
    switch (action.type) {
      case getAllProduct:
         return {products:action.payload}
        break;
      default:
        return state;
        break;
    }
  }
  export const categoryReducer=(state=initialState,action)=>{
    switch (action.type) {
      case categorydata:
          return {category:action.payload}
         break;
      default:
        return state;
        break;
    }
  }
  export const cartReducer=(state=initialState,action)=>{
    switch (action.type) {
      case addData:
          let data=state.cartList.length>0?state.cartList.filter((list)=>list.id !== action.payload.id):[]
          if(data.length>0)
          {
            return {cartList:[...data,action.payload]}
          }else{
            return {cartList:[...state.cartList,action.payload]}
          }
         
         break;
      case emptyData:
         return {cartList:[]}
        break;
      case updateData:
         
        let tempCart=state.cartList.map(cartItem=>{
          if(cartItem.id === action.payload)
          { 
            cartItem={...cartItem,stock:cartItem.stock -1,count:cartItem.count+1}
          }
          return cartItem;
        })
       
        return {
          ...state,
          cartList:tempCart
        }
         break;
      
      case removeData:
        let tempCarts=[]
      if(action.payload.count <=1){
      return{
        ...state,
        cartList:state.cartList.filter((cartitem)=>cartitem.id !== action.payload.id)
      }
    }else{
      tempCarts=state.cartList.map(cartItem=>{
        
        if(cartItem.id === action.payload.id)
       
        {
          cartItem={...cartItem,stock:cartItem.stock + 1,count:cartItem.count-1}
        }
      
        return cartItem;
      })}
      return {
        ...state,
        cartList:tempCarts
      }
         break;

      case totalProductPrice:
        let{total,count}=state.cartList.reduce((cartTotal,cartItem)=>{
          // console.log(cartTotal)
          const {price,count}=cartItem;
          cartTotal.count += count;
          cartTotal.total += count * price;
          return cartTotal
         },{
           count:0,
           total:0
         })
         total=parseFloat(total.toFixed(2))
         return {
           ...state,
           total,
           count
         }
         break;
      default:
        return state;
        break;
    }
  }
  export const registration=(state=initialState,action)=>{
    switch (action.type) {
      case logout:
        return {logout:!state.logout}
        break;
    
      default:
         return state
        break;
    }
  }
