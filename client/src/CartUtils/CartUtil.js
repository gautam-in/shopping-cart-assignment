export const getTotal = (product) => {
  return product.quantity * product.price;
};
export const getGrandTotal = (cartItems) => {
  let total = 0;
  for (let i of cartItems) {
    total += getTotal(i);
  }
  return total;
};
