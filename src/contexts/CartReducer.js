
const Storage = (cartItems) => {
  localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
};

export const sumItems = cartItems => {
  Storage(cartItems);
  let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
  let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  return { itemCount, total };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
  case 'ADD_ITEM':
    if (!state.cartItems.find(item => item.id === action.payload.id)) {
      state.cartItems.push({
        ...action.payload,
        quantity: 1
      });
    } 

    return {
      ...state,
      ...sumItems(state.cartItems),
      cartItems: [...state.cartItems]
    };
  case 'REMOVE_ITEM':
    return {
      ...state,
      ...sumItems(state.cartItems.filter(item => item.id !== action.payload.id)),
      cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
    };
  case 'INCREASE':
    let itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
    if(state.cartItems[itemIndex].quantity < state.cartItems[itemIndex].stock)
      state.cartItems[itemIndex].quantity++;
    return {
      ...state,
      ...sumItems(state.cartItems),
      cartItems: [...state.cartItems]
    };
  case 'DECREASE':
    itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
    let cartItems;
    if(state.cartItems[itemIndex].quantity == 1) {
      cartItems = [...state.cartItems.filter(item => item.id !== action.payload.id)];
    }
    else {
      state.cartItems[itemIndex].quantity--;
      cartItems = state.cartItems;
    }
    return {
      ...state,
      ...sumItems(cartItems),
      cartItems: [...cartItems]
    };
  case 'CHECKOUT':
    return {
      cartItems: [],
      checkout: true,
      ...sumItems([]),
    };
  case 'CLEAR':
    return {
      cartItems: [],
      ...sumItems([]),
    };
  default:
    return state;

  }
};