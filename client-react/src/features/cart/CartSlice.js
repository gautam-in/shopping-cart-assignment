import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    cart: [],
    error: ''
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            console.log('action.payload ', action.payload);
            state.loading = true;
            const cartArr = [...state.cart]
            const itemIndex = cartArr.findIndex(item => item.id === action.payload.id);
            console.log('itemIndex ', itemIndex);

            if (itemIndex > -1) {
                cartArr[itemIndex].qty++;
                cartArr[itemIndex].totalPrice = cartArr[itemIndex].qty * cartArr[itemIndex].price;
                cartArr.splice(itemIndex, 1, cartArr[itemIndex])
            }
            else {
                cartArr.push({ id: action.payload.id, qty: 1, name: action.payload.name, imageURL: action.payload.imageURL, price: action.payload.price, totalPrice: action.payload.price })
            }
            state.cart = [...cartArr]
            state.loading = false;
        },
        getCart(state) {
            return {
                ...state
            }
        },
        removeFromCart(state, action) {
            state.loading = true;
            const cartArr = [...state.cart]
            const itemIndex = cartArr.findIndex(item => item.id === action.payload);

            if (itemIndex > -1) {
                cartArr[itemIndex].qty--;
                cartArr[itemIndex].totalPrice = cartArr[itemIndex].qty * cartArr[itemIndex].price;
                cartArr[itemIndex].qty < 1 && cartArr.splice(itemIndex, 1)
                state.cart = [...cartArr];
            }
            state.loading = false;
        }

    }
})

export default cartSlice.reducer
export const { addToCart, getCart, removeFromCart } = cartSlice.actions