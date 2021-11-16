import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
	// {id, name , imgURL, description, qty, price}
	cartList: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: INITIAL_STATE,
	reducers: {
		// add to cart action
		addToCart: (state, action) => {
			// if product is already present then update qty. Else add to cartList with qty : 1
			const isProductPresent = state.cartList.find(
				(cart) => cart.id === action.payload.id
			);
			if (isProductPresent) {
				// updated cart list
				const newCartList = state.cartList.map((cart) => {
					if (cart.id === action.payload.id) {
						return { ...cart, qty: cart.qty + 1 };
					}
					return cart;
				});

				state.cartList = newCartList;
			} else {
				state.cartList.push({ ...action.payload, qty: 1 });
			}
		},

		// addQty by id action
		addQty: (state, action) => {
			const newCartList = state.cartList.map((cart) => {
				if (cart.id === action.payload) return { ...cart, qty: cart.qty + 1 };
				return cart;
			});
			state.cartList = newCartList;
		},

		// removeQty by id action
		removeQty: (state, action) => {
			// check if the delete clicked cart product id qty is 1
			const qtyIsOne = state.cartList.find((cart) => {
				if (cart.id === action.payload && cart.qty === 1) {
					return true;
				}
				return false;
			});

			// if qty is one then remove that product from cart.
			if (qtyIsOne) {
				const newCartList = state.cartList.filter(
					(cart) => cart.id !== action.payload
				);
				state.cartList = newCartList;
			}

			// else decrease qty with one.
			else {
				const newCartList = state.cartList.map((cart) => {
					if (cart.id === action.payload) return { ...cart, qty: cart.qty - 1 };
					return cart;
				});
				state.cartList = newCartList;
			}
		},
	},
});

export const { addToCart, addQty, removeQty } = cartSlice.actions;

export const cartList = (state) => state.cart.cartList;

export default cartSlice.reducer;
