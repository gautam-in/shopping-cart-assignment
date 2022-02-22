export const addItemToCart = (cartItems, newItem) => {
	const existingCartItem = cartItems.find((item) => item.id === newItem.id);

	if (existingCartItem) {
		return cartItems.map((cartItem) => {
			return cartItem.id === newItem.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem;
		});
	}

	return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};
