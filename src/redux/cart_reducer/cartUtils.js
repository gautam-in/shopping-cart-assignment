const updateQuantityIfExists = (currentCartItems, itemToBeAdded) => {
  const isAlreadyExists = currentCartItems.find(
    (item) => item.id === itemToBeAdded.id
  );
  if (isAlreadyExists) {
    return currentCartItems.map((item) =>
      item.id === itemToBeAdded.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...currentCartItems,{ ...itemToBeAdded, quantity: 1}];
};

export { updateQuantityIfExists };
