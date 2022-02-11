export const addItemToCart = (cartItems, cartItemToAdd) => {
  // To add items to cart and increase count of any existing item
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decrementCartItem = (cartItems, cartItemToDecrement) => {
  // To remove items to cart and decrease count of any existing item
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToDecrement.id
  );

  if (existingCartItem.quantity === 1)
    cartItems.filter((cartItem) => cartItem.id !== cartItemToDecrement.id);

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToDecrement.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity > 0 ? cartItem.quantity - 1 : 0,
        }
      : cartItem
  );
};
