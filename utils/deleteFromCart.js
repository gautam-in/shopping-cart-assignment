
const deleteFromCart = (product, deleteCart, newTotalPrice) => {
    let deleteIndex;
    deleteCart.find((item, index) => {
      if (item.id === product.id) deleteIndex = index;
    });
    product.quantity -= 1;
    product.totalPrice -= product.price;
    newTotalPrice -= product.price;
    if (product.quantity === 0) {
      deleteCart.splice(deleteIndex, 1);
    }
    return { deleteCart, newTotalPrice };
  };

  export default deleteFromCart;