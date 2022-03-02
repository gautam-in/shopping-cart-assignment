export const cartAddItem = (cartItems, cartItemtoAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemtoAdd.id
  );
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemtoAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  return [
    ...cartItems,
    { ...cartItemtoAdd, quantity: 1, item_total: cartItemtoAdd.price },
  ];
};

export const itemTotal = (cartItems) => {
  return cartItems.map((cartItem) => {
    return {
      ...cartItem,
      item_total: cartItem.price * cartItem.quantity,
    };
  });
};

export const removeItem = (cartItems, cartItemtoRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemtoRemove.id
  );
  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemtoRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemtoRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
