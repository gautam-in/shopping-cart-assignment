import {
    CHANGE_CART_STATUS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    FETCH_FROM_CART,
  } from "./cartTypes";
  
  const initialState = {
    cartopen: false,
    cartproducts: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_CART_STATUS:
        return {
          ...state,
          cartopen: !state.cartopen,
        };
      case ADD_TO_CART: {
        const temp = action.payload;
        const prevcount = state.cartproducts.length;
        const restproducts = state.cartproducts.filter(
          (item) => item.id !== temp.id
        );
        let finalproducts = [];
        if (restproducts.length === prevcount) {
          temp.count = 1;
          finalproducts = [...restproducts, temp];
        } else {
          const temp1 = state.cartproducts.filter((item) => item.id === temp.id);
          temp1[0].count += 1;
          finalproducts = [...restproducts, temp1[0]];
        }
        return {
          ...state,
          cartproducts: [...finalproducts],
        };
      }
      case REMOVE_FROM_CART: {
        const temp = action.payload;
        const restproducts = state.cartproducts.filter(
          (item) => item.id !== temp.id
        );
        const removedproducts = state.cartproducts.filter(
          (item) => item.id === temp.id
        );
        console.log(removedproducts, "remove");
        const finalproducts = removedproducts.length
          ? [
              ...restproducts,
              { ...removedproducts[0], count: removedproducts[0].count - 1 },
            ]
          : [...state.cartproducts];
        return {
          ...state,
          cartproducts: [...finalproducts],
        };
      }
      case FETCH_FROM_CART:
        return {
          ...state,
          cartproducts: state.cartproducts.filter((item) => item.count),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  