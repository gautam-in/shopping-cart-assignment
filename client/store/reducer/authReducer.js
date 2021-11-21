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
        return { ...state, isLoggedIn: status, loggedInUser: curUser, cart : {...state.cart} };
      case "SET_LOGOUT_STATUS":
        return {...state, isLoggedIn :false, loggedInUser: null,cart : {totalPrice: 0, cartItems: []}}
      case "ADD_CART_ITEM": 
        console.log('Cart State',state)
        console.log(state.isLoggedIn)
        if(state.isLoggedIn) {
          console.log('INDSIDE')
          let product = action.payload.product;
          let cartItems = state.cart.cartItems;
          console.log(product, cartItems)
          let isProductInCart = cartItems.find(cartItem => cartItem.id === product.id);
            console.log(isProductInCart)
          let productPrice = product.price;
          if (!isProductInCart) {
            let quantity = 1;
            cartItems.push({...product, quantity});
            return {...state, cart: { ...state.cart, cartItems: [...cartItems], totalPrice : productPrice * quantity}}
          }else {
            let id = action.payload.product.id;
            let cartItem = state.cart.cartItems.find(cartItem => cartItem.id === id);
            let quantity = cartItem.quantity + 1;
            cartItem.quantity = quantity;
            return {...state, cart: {...state.cart, cartItems: [...cartItems, cartItem]}}
          }
        }
        return state
      case "INCREMENT_CART_PRODUCT_QUANTITY":
          let id = action.payload.cartItem.id;
          let cartItem = state.cart.cartItems.find(cartItem => cartItem.id === id);
          let quantity = cartItem.quantity + 1;
          cartItem.quantity = quantity;
          return {...state, cart: {...state.cart, cartItems: [...state.cart.cartItems]}}
      default:
        return state;
    }
  }
  