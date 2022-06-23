import * as CONSTANTS from "./constants";

const initialState = {
  categories: null,
  products: null,
  cart: [],
  bannerData: null,
  loading: false,
  filter: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.SET_BANNER_DATA:
      return { ...state, bannerData: action.payload };

    case CONSTANTS.SET_CATEGORIES:
      return { ...state, categories: action.payload };

    case CONSTANTS.SET_FILTER:
      return { ...state, filter: action.payload };

    case CONSTANTS.SET_PRODUCTS:
      return { ...state, products: action.payload };

    // adding and deleting items from the cart.If a items quantity get less than 0,it
    //is removed from the cart. Furthermore if a new item is added to the cart then
    //a new object is created for it with buufer property as 1 and if its a duplicate
    //then the buffer is incremented

    case CONSTANTS.TOGGLE_CART: {
      if (action.payload.update) {
        let target = state.cart.find(
          (item) => action.payload.data.id === item.id
        );
        if (target) {
          let modCart = state.cart.map((item) => {
            if (item.id === action.payload.data.id) {
              item.buffer += 1;
              return item;
            }
            return item;
          });
          return { ...state, cart: modCart };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload.data, buffer: 1 }],
          };
        }
      } else {
        let target = state.cart.find(
          (item) => action.payload.data.id === item.id
        );

        let modCart;
        if (target.buffer - 1 === 0) {
          modCart = state.cart.filter(
            (item) => action.payload.data.id !== item.id
          );
        } else {
          modCart = state.cart.map((item) => {
            if (item.id === action.payload.data.id) {
              item.buffer -= 1;
              return item;
            }
            return item;
          });
        }
        return { ...state, cart: modCart };
      }
    }

    default:
      return state;
  }
};
export default reducer;
