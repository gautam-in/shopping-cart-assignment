
export const filteredProductsData = (data,id)  => data.filter((value) => value.category === id);

export function filterDropDownData(data,id){
    let result = data.find((val) => val.id === id)
    return result.name
}

export const addItemsToCart = (cartItems, newItem) => {
  const isItemExists = cartItems.find((item) => item.id === newItem.id);
  return isItemExists
    ? cartItems.map((item) =>
        item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    : [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemsFromCart = (cartItems, itemToRemove) => {
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

export function getCartQuantityAndTotalPrice(cartItems) {
  let { total, quantity } = cartItems.reduce(
    (cartTotal, cartItem) => {
      const { price, quantity } = cartItem;
      const itemTotal = price * quantity;

      cartTotal.total += itemTotal;
      cartTotal.quantity += quantity;

      return cartTotal;
    },
    {
      total: 0,
      quantity: 0,
    }
  );
  total = parseFloat(total.toFixed(2));
  return {
    quantity,
    total
  }
}

