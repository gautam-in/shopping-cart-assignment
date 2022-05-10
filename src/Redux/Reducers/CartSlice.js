import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const cartSlice = createSlice({
    name: "cart",
    initialState: { items: [], totalAmount: null, status: null },
    reducers: {
        addItemToCart: (state, action) => {
            let check = false;
            if (state.items && state.items.length > 0) {
                state.items.map(x => {
                    if (x.id == action.payload.id) {
                        x.quantity = x.quantity + 1;
                        check = true;
                        x.totalAmountPerItem = x.data.price * x.quantity;
                        state.totalAmount = state.totalAmount + action.payload.price;

                    }
                })
                if (check == false) {
                    let dumyData = {
                        id: action.payload.id,
                        data: action.payload,
                        quantity: 1,
                        totalAmountPerItem: action.payload.price
                    }
                    state.items = state.items.concat(dumyData);
                    state.totalAmount = state.totalAmount + action.payload.price;
                }
            }
            else if (check == false) {
                let dumyData = {
                    id: action.payload.id,
                    data: action.payload,
                    quantity: 1,
                    totalAmountPerItem: action.payload.price
                }
                state.items = state.items.concat(dumyData);
                state.totalAmount = state.totalAmount + action.payload.price;
            }

        },
        removeItemFromCart: (state, action) => {
            let id = action.payload.id;
            state.items = state.items.filter(item => item.id != id);
        },
        addQuantity: (state, action) => {
            state.items.map(item => {
                if (item.id == action.payload) {
                    item.quantity = item.quantity + 1;
                    item.totalAmountPerItem = item.data.price * item.quantity;
                    state.totalAmount = state.totalAmount + item.data.price;
                }
            })

        },
        reduceQuantity: (state, action) => {
            state.items.map(item => {

                if (item.id == action.payload) {
                    if (item.quantity > 1) {
                        item.quantity = item.quantity - 1;
                        item.totalAmountPerItem = item.data.price * item.quantity;
                        state.totalAmount = state.totalAmount - item.data.price;
                    }
                    else {
                        state.items = state.items.filter(item => item.id != action.payload);
                    }
                }

            })
        }
    }
})


// export const home = (state=> state.value);
export const { addItemToCart, addQuantity, reduceQuantity } = cartSlice.actions

export default cartSlice.reducer;