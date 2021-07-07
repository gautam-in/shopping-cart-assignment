
const deleteFromCart = (product, deleteCart, newTotalPrice) => {
    product.quantity -= 1;
    product.totalPrice -= product.price;
    newTotalPrice -= product.price;
    if (product.quantity === 0) {
     deleteCart = deleteCart.filter(item => item.id !== product.id)
    }
    return {deleteCart, newTotalPrice };
  };

  export default deleteFromCart;