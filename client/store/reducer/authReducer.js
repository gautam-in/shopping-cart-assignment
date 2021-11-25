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
        if(state.isLoggedIn) {
          let product = action.payload.product;
          let cartItems = state.cart.cartItems;
          let isProductInCart = cartItems.find(cartItem => cartItem.id === product.id);
          let productPrice = product.price;
          if (!isProductInCart) {
            let quantity = 1;
            cartItems.push({...product, quantity});
            let totalPrice = state.cart.totalPrice + productPrice;
            return {...state, cart: { ...state.cart, cartItems: [...cartItems], totalPrice }}
          }else {
            let id = action.payload.product.id;
            let cartItem = state.cart.cartItems.find(cartItem => cartItem.id === id);
            let quantity = cartItem.quantity + 1;
            cartItem.quantity = quantity;
            return {...state, cart: {...state.cart, cartItems: [...cartItems, cartItem]}}
          }
        } else  {
          return state;
        }
      case "INCREMENT_CART_PRODUCT_QUANTITY":
          let { id, price } = action.payload.cartItem;
          let cartItem = state.cart.cartItems.find(cartItem => cartItem.id === id);
          let quantity = cartItem.quantity + 1;
          let totalPrice = state.cart.totalPrice +  price;
          cartItem.quantity = quantity;
          return {...state, cart: {...state.cart, cartItems: [...state.cart.cartItems], totalPrice: totalPrice}}
      case "DECREMENT_CART_PRODUCT_QUANTITY":
          let pid = action.payload.cartItem.id
          let prodPrice = action.payload.cartItem.price

          let cartItem1 = state.cart.cartItems.find(cartItem => cartItem.id === pid);
          let quantity1 = action.payload.cartItem.quantity - 1;
          if (quantity1 === 0) {
            console.log(quantity1)
            let TP = state.cart.totalPrice - prodPrice;
            cartItem1.quantity = quantity1;
            let newCartItems = state.cart.cartItems.filter(cartItem => cartItem.id !== pid);
            return {...state, cart: {...state.cart, cartItems: [...newCartItems], totalPrice: TP}}
          } else {
            let TP = state.cart.totalPrice - prodPrice;
            cartItem1.quantity = quantity1;
             return {...state, cart: {...state.cart, cartItems: [...state.cart.cartItems], totalPrice: TP}}
          }
          
      default:
        return state;
    }
  }
  