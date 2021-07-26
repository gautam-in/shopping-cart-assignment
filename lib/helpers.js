export function calculateAmount(cart) {
  const result = [...cart.keys()].reduce((tally, item) => {
    const product = cart.get(item);
    const totalAmountOfProduct = product.price * product.quantity;
    return tally + totalAmountOfProduct;
  }, 0);
  return result;
}

export function calculateQuantity(cart) {
  const result = [...cart.keys()].reduce((tally, item) => {
    const product = cart.get(item);
    return tally + product.quantity;
  }, 0);
  return result;
}
