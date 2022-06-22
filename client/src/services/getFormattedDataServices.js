// add qunatity for repeating cart items
export const getQuantifiedCartItems = (cartItems) => {
  return [
    ...cartItems
      .reduce((mp, o) => {
        if (!mp.has(o.id)) mp.set(o.id, { ...o, quantity: 0 });
        mp.get(o.id).quantity++;
        return mp;
      }, new Map())
      .values(),
  ];
};

// get overall cart price
export const getCartPrice = (cartItems) => {
  return cartItems.reduce((cartPrevItem, cartItem) => {
    return cartPrevItem + cartItem.price * cartItem.quantity;
  }, 0);
};
