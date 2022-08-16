const initialState ={
    cartItems:[]
}

export default function cartReducer(state=initialState , action ){
    const { type , payload } = action;
    switch(type){
        case ADD_ITEM_TO_CART:
      const itemToAdd = payload;
      const existingItem = state.cartItems.find(
        (item) => item._id === itemToAdd._id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem._id === itemToAdd._id &&
            cartItem.quantity_available !== cartItem.quantity
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...itemToAdd, quantity: 1 }],
      };
    case REMOVE_ITEM_FROM_CART:
      const itemToRemove = payload;
      const foundItem = state.cartItems.find(
        (item) => item._id === itemToRemove._id
      );
      if (foundItem.quantity === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (cartItem) => cartItem._id !== payload._id
          ),
        };
      }

      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem._id === payload._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem._id !== payload._id
        ),
      };    
    
    case EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      }
    default:  
    return state;
    }
}
    
