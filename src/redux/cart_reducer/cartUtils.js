const updateQuantityIfExists = (currentCartItems, itemToBeAdded, type) => {
  const isAlreadyExists = currentCartItems.find(
    (item) => item.id === itemToBeAdded.id
  );
  if (isAlreadyExists) {
    return currentCartItems.map((item) =>
      item.id === itemToBeAdded.id
        ? {
            ...item,
            quantity:
              type === "ADD_ITEM" ? item.quantity + 1 : item.quantity - 1,
          }
        : item
    );
  }
  return [...currentCartItems, { ...itemToBeAdded, quantity: 1 }];
};

const removeItemFromCart = (currentCartItems, payload) => {
  
}

export { updateQuantityIfExists };
