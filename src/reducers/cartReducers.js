export const cartReducers = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        count: state.count + 1,
        products: { ...state.products, ...action.product },
      };

    case "EDIT_ITEM": {
      const editProduct = { ...state.products };
      const { stock, quantity } = editProduct[action.id];
      editProduct[action.id].quantity =
        stock === quantity ? stock : quantity + 1;

      return {
        ...state,
        count: stock === quantity ? state.count : state.count + 1,
        products: { ...editProduct },
      };
    }

    case "REMOVE_ITEM": {
      const removeProduct = { ...state.products };
      const { quantity } = removeProduct[action.id];
      removeProduct[action.id].quantity = quantity - 1;

      if (quantity === 1) {
        delete removeProduct[action.id];
      }

      return {
        ...state,
        count: state.count - 1,
        products: { ...removeProduct },
      };
    }

    case "HANDLE_CART":
      return {
        ...state,
        cartOpen: action.cartOpen,
      };

    default:
      return state;
  }
};
