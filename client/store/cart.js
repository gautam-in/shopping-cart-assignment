import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        addToCart: (state, { payload }) => {
            if (state[payload.id]) {
                state[payload.id].count += 1
            }
            else {
                const { name, id, price, imageURL } = payload
                const product = { imageSrc: imageURL, imageAlt: name, count: 1, price, id, name }
                state[payload.id] = product
            }
        },
        incrementCart: (state, { payload }) => {
            state[payload].count += 1
        },
        removeFromCart: (state, { payload }) => {
            if (state[payload]) {
                if (state[payload].count > 1) {
                    state[payload].count -= 1
                }
                else delete state[payload]
            }
        },
    },
})

export const { addToCart, removeFromCart, incrementCart } = cartSlice.actions

export default cartSlice.reducer