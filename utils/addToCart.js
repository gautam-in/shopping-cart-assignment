
const addNewProduct = (product, cart, totalPrice = 0) => {
    let addedProduct = { ...product };
    addedProduct.quantity = 1;
    addedProduct.totalPrice = addedProduct.quantity * addedProduct.price;
    totalPrice += addedProduct.price;
    cart = [...cart, { ...addedProduct }];
    return {cart, totalPrice };
  };
const addToCart = (product, cart = [], totalPrice ) => {
    if (cart.length > 0) {
      let existingItem = cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
        totalPrice += existingItem.price;
        return {cart, totalPrice };
      } else {
        return addNewProduct(product,cart, totalPrice);
      }
    } else {
     return addNewProduct(product, cart, totalPrice);
    }
  };

 export default addToCart; 