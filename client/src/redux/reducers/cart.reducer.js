export function cart(cartData = [], action) {
  switch (action.type) {
    case "DELETE_FROM_CART": {
      return removeFromCart({
        cartData,
        productId: action.productId,
      });
    }
    case "ADD_TO_CART": {
      const index = cartData.findIndex((c) => c.id === action.cartItem.id);
      if (index >= 0) {
        const modifiedCart = quantityModify(cartData, "+", index);
        return modifiedCart;
      } else {
        return [...cartData, action.cartItem];
      }
    }

    case "DECREMENT_QUANTIY": {
      const index = cartData.findIndex((c) => c.id === action.productId);

      if (cartData[index].qty === 1) {
        return removeFromCart({
          cartData,
          productId: action.productId,
        });
      } else {
        const modifiedCart = quantityModify(cartData, "-", index);
        return modifiedCart;
      }
    }

    default:
      return cartData;
  }
}

const quantityModify = (cartData, operator, index) => {
  let qty = cartData[index].qty;

  let quantity = qty + 1;
  if (operator === "-") quantity = qty - 1;

  return [
    ...cartData.slice(0, index),
    {
      ...cartData[index],
      qty: quantity,
    },
    ...cartData.slice(index + 1),
  ];
};

const removeFromCart = ({ cartData, productId }) => {
  return cartData.filter((cartItem) => cartItem.id !== productId);
};
