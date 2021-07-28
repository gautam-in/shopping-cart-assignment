const initialState = {
  cartItems: [],
  count: 0,
  categories:[],
  banners:[],
  products:[]
};

const reducer = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return{
        ...state,
        categories:action.payload
      }

    case "FETCH_BANNERS":{
        return{
        ...state,
        banners:action.payload
      }
    }
    case "FETCH_PRODUCTS":{
      return{
      ...state,
      products:action.payload
    }
  }
    case "ADD_CART_ITEM":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        count: state.count + 1,
      };
    case "INCREMENT_QTY":
      let new_cart = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      return {...state, cartItems: new_cart, count: state.count + 1 };
    case "DECREMENT_QTY":
      let dec_cart = state.cartItems.map((item, i) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      dec_cart = dec_cart.filter((item) => item.quantity > 0);
      return {...state, cartItems: dec_cart, count: state.count - 1 };
    case "RESET_CART":
      return { cartItems: [], count: 0, categories:[], banners:[], products:[] };
    default:
      return state;
  }
};

export default reducer;
