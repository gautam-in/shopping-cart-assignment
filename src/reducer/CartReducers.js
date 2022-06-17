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
      let newQuantity = quantity;
      newQuantity = stock === quantity ? stock : quantity + 0.5;
      editProduct[action.id].quantity = newQuantity;
      let newCount = stock === quantity ? state.count : state.count + 1;
      return {
        ...state,
        count: newCount,
        //products: { ...editProduct },
      };
    }

    case "REMOVE_ITEM": {
      const removeProduct = { ...state.products };
      const { quantity } = removeProduct[action.id];
      removeProduct[action.id].quantity = quantity - 0.5;

      if (quantity <= 1) {
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

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
};
