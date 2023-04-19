import { createSlice } from '@reduxjs/toolkit';

const getTotalPrice = (products) => {
    return products.reduce((price, product) => {
        return price + (product.count * product.price);
    }, 0);
};

const getTotalItemsCount = (products) => {
    return products.reduce((count, product) => {
        return count + product.count;
    }, 0);
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0,
        totalItems: 0
    },
    reducers: {
        add: (state, action) => {
            const currentProduct = action.payload;
            let newProduct = true;
            const newProducts = state.items.map((product) => {
                if (product.id === currentProduct.id) {
                    newProduct = false;
                    product.count += 1;

                    return product;
                }

                return product;
            });
            if (newProduct) {
                state.items.push({
                    ...currentProduct,
                    count: 1
                });
            } else {
                state.items = newProducts;
            }
            state.totalPrice = getTotalPrice(state.items);
            state.totalItems = getTotalItemsCount(state.items);
        },
        remove: (state, action) => {
            const currentProduct = action.payload;
            const newProducts = state.items.map((product) => {
                if (product.id === currentProduct.id && product.count) {
                    product.count -= 1;

                    return product;
                }

                return product;
            }).filter((product) => product.count >= 1);
            state.items = newProducts;
            state.totalPrice = getTotalPrice(state.items);
            state.totalItems = getTotalItemsCount(state.items);
        }
    },
})

export const { add, remove } = cartSlice.actions

export default cartSlice.reducer