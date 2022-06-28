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

// get width in numbers (px removed)
export const getNumericalWidth = (width) => {
  return parseInt(
    width.substring(
      0,
      width.length - 2
    )
  );
}

// get product filter options for select menu
export const getProductFilterOptions = (filterMenuList) => {
  const options = [];

  filterMenuList.forEach((filterMenuItem) => {
    options.push({
      label: filterMenuItem.name,
      value: filterMenuItem.id,
    })
  });

  return options;
}

// get product filter options for select menu
export const getSessionCartData = (cartData) => {
  const options = [];
  const data = getQuantifiedCartItems(cartData);
  data.forEach((cartItem) => {
    options.push({
      name:cartItem.name,
      price: cartItem.price,
      quantity: cartItem.quantity,
    });
  })

  return options;
}
