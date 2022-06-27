import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {

    cartUpdate: {
        loading: true,
        data: [],
        error: ""

    },
    cartList: {
        cartItems: [],
        totalItems: 0,
        cartItemAdded: false,


    },
    cartOpen: false



}

export const postToCart = createAsyncThunk(
    'cart/postToCart', async () => {
        const response = await axios.get("http://localhost:4000/addToCart")
        console.log('post to cart response', response)
        return response.data
    }
)

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        updateCartItems(state, action) {
       
            state.cartList.cartItems = [...state.cartList.cartItems, action.payload]
            state.cartList.totalItems = state.cartList.totalItems + 1
            state.cartList.cartItemAdded = true


        },
        openCart(state) {
            state.cartOpen = !state.cartOpen
        },
        addTocart(state, action) {
         
            const indexItem = state.cartList.cartItems.findIndex(item => item.id === action.payload.item.id)

            state.cartList.cartItems[indexItem] = {
                ...action.payload.item,
                quantity: action.payload.quantity + 1,

            }


        },
       
        removeFromCart(state,action) {
            const indexItem = state.cartList.cartItems.findIndex(item => item.id === action.payload.item.id)
            state.cartList.cartItems=state.cartList.cartItems.filter(ele=>{
                return ele !==  state.cartList.cartItems[indexItem]
            })
            state.cartList.totalItems=state.cartList.totalItems-1

        },

        decreaseCartItem(state,action){
            const indexItem = state.cartList.cartItems.findIndex(item => item.id === action.payload.item.id)
            state.cartList.cartItems[indexItem] = {
                ...action.payload.item,
                quantity: action.payload.quantity -1 ,

            }

        }

    },
    extraReducers: {
        [postToCart.pending]: state => {
            state.loading = true
            state.data = []
            state.error = ""
        },
        [postToCart.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = ""
        },
        [postToCart.rejected]: (state, action) => {
            state.loading = false
            state.data = []
            state.error = action.payload
        }




    }
}
)

export default CartSlice.reducer

export const { updateCartItems, openCart, addTocart, removeFromCart, decreaseCartItem} = CartSlice.actions