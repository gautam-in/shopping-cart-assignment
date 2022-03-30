export const addToCart = (cartItems, newItem) => {
  const isItemExists = cartItems.find((item) => item.id === newItem.id);
  return isItemExists
    ? cartItems.map((item) =>
        item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    : [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === itemToRemove.id
  );

  return existingCartItem.quantity === 1
    ? cartItems.filter((item) => item.id !== itemToRemove.id)
    : cartItems.map((item) =>
        item.id === itemToRemove.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
};
