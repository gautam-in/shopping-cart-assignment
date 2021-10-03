const initalState = {
  cart: [],
};

const isExistingProduct = (cartItems, newProduct) => {
  const result = cartItems.filter((item) => {
    if (String(item.id) === String(newProduct.id)) {
      return item;
    }
  });
  return result[0];
};
const updateQuantity = (cartItems, newProduct) => {
  let updatedItems = cartItems.map((item) => {
    if (item.id === newProduct.id) {
      item.quantity++;
    }
    return item;
  });
  return updatedItems;
};

const updateCart = (state = initalState, action) => {
  let cartItems = state.cart;
  switch (action.type) {
    case "ADD_PRODUCT": {
      let isExists = isExistingProduct(cartItems, action.payload);
      let updatedItems = isExists
        ? updateQuantity(cartItems, action.payload)
        : [...state.cart, action.payload];
      return {
        ...state,
        cart: updatedItems,
      };
    }
    case "REMOVE_PRODUCT":{
        let updatedCart = cartItems.filter((item)=>{
            if (String(item.id) !== String(action.payload.id)) {
                return item
            }
        })
       return {
           cart:updatedCart
       }
    }
    case "REDUCE_QUANTITY": {
      let updatedCart = cartItems.map((item) => {
        if (String(item.id) === String(action.payload.id)) {
          item.quantity--;
          if(item.quantity<=0) return;
        }
        return item;
      });
      return {
        cart: updatedCart,
      };
    }
    case "ADD_QUANTITY": {
        let updatedCart = cartItems.map((item) => {
          if (String(item.id) === String(action.payload.id)) {
            item.quantity++;
          }
          return item;
        });
        return {
          cart: updatedCart,
        };
      }
    default: {
      return {
        cart: state.cart,
      };
    }
  }
};

export default updateCart;
