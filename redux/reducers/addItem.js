export const addToCart = (product, cart = [], totalPrice) => {
    totalPrice = 0;
    if (cart.length > 0) {
      let existingItem = cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        let addedProduct = { ...product };
        addedProduct.quantity = 1;
        addedProduct.totalPrice = addedProduct.quantity * addedProduct.price;
        cart = [...cart, { ...addedProduct }];
      }
    } else {
      let addedProduct = { ...product };
      addedProduct.quantity = 1;
      addedProduct.totalPrice = addedProduct.quantity * addedProduct.price;
      cart = [...cart, { ...addedProduct }];
    }
    cart.forEach((item) => (totalPrice = item.totalPrice + totalPrice));
  
    return { cart, totalPrice };
  };
  
export const deleteFromCart = (product, deleteCart, newTotalPrice) => {
    let deleteIndex = deleteCart.find((item, index) => {
      if (item.id === product.id) return index;
    });
    product.quantity -= 1;
    product.totalPrice -= product.price;
    newTotalPrice -= product.price;
    if (product.quantity === 0) {
      deleteCart.splice(deleteIndex, 1);
    }
    return { deleteCart, newTotalPrice };
  };
  