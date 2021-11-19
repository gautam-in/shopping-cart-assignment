let initialState = {
    isLoggedIn: false,
    loggedInUser: null,
    token: null,
    favourites: [],
    cart: {
      cartItems : [],
      totalPrice : 0
    }
};


export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case "SET_AUTH_STATUS":
        let { status, curUser } = action.payload;
        return { ...state, isLoggedIn: status, loggedInUser: curUser, cart : {cartItems: [], totalPrice: 0} };
      case "ADD_CART_ITEM": 
        let product = action.payload.product;
        let cartItems = state.cart.cartItems;
        let isProductInCart = cartItems.find(cartItem => cartItem.id === product.id);
        let productPrice = product.price;
        if (!isProductInCart) {
          let quantity = 1;
          cartItems.push({...product, quantity});
          return {...state, cart: { ...state.cart, cartItems: [...cartItems], totalPrice : productPrice * quantity}}
        }else {
          let id = action.payload.product.id;
          let cartItem = cartItems.find(cartItem => cartItem.id === id);
          let quantity = cartItem.quantity + 1;
          cartItem.quantity = quantity;
          return {...state, cart: {...state.cart, cartItems: [...cartItems, cartItem]}}
        }
      case 'INCREMENT_CART_PRODUCT_QUANTITY':
          let id = action.payload.product.id;
          let cartItem = cartItems.find(cartItem => cartItem.id === id);
          let quantity = cartItem.quantity + 1;
          cartItem.quantity = quantity;
          return {...state, cart: {...state.cart, cartItems: [...cartItems, cartItem]}}
      default:
        return state;
    }
  }
  