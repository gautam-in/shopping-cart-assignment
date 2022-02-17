import { createContext, useReducer } from "react";
import { addItemToCart, removeItemFromCart } from "../utils/cart";

export const CartContext = createContext();

function cartReducer(state, action) {
	switch (action.type) {
		case "CART_TOGGLE": {
			return { ...state, isCartOpen: !state.isCartOpen };
		}

		case "ADD_TO_CART": {
			return {
				...state,
				items: addItemToCart(state.items, action.payload),
			};
		}

		case "REMOVE_FROM_CART":
			return {
				...state,
				items: removeItemFromCart(state.items, action.payload),
			};

		default:
			return state;
	}
}
const INITIAL_STATE = {
	items: [],
	isCartOpen: false,
};

function CartProvider({ children }) {
	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
	const value = { state, dispatch };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
