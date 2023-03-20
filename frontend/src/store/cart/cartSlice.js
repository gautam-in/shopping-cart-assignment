import { createSlice,current } from "@reduxjs/toolkit";

const initialState={
    products: [],
    totalItems: 0,
    totalAmount: 0
}
const cartSlice=createSlice({
   name:'cart',
   initialState,
   reducers:{
    addItemToCart:(state,action)=>{
       
        const selectItem=state.products.find((product)=>{
            return product.id===action.payload.data.id
        });
        if(selectItem){
            selectItem.quantity++;
            state.totalItems++;
        }
        else{
            state.products.push({...action.payload.data,quantity:1});
            state.totalItems++;
        }
    },
    incrementQuantity:(state,action)=>{
        state.products=state.products.map((product)=>{
            console.log('if', action.payload.id,product.id);
         if(action.payload.id===product.id){
            return {...product, quantity: product.quantity+1}
        }
        else {
            return product
        }
      })
      state.totalItems++
    },
    decrementQuantity:(state,action)=>{
      const selectItem=state.products.find((product)=>{
         return product.id===action.payload.id
      })

      if(selectItem.quantity===1){
        state.products=state.products.filter((product)=>{
            return product.id!==action.payload.id;
        })
        state.totalItems--
      }
      else{
        selectItem.quantity--;
        state.totalItems--;
    }},
    calculateTotal:(state,action)=>{
        state.totalAmount=state.products.reduce((total,product)=>{
            console.log(total.price,'total');
            return total+product.price*product.quantity
        },0);
    }
   }
})

export const {addItemToCart,incrementQuantity,decrementQuantity,calculateTotal} = cartSlice.actions;
export const cartReducer= cartSlice.reducer;