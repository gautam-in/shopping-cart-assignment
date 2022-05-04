import get from "lodash/get";
import { AppState, ProductItem, SelectedCategory } from './app-context';
import {  REMOVE_CART_ITEM, SET_SELECTED_CATEGORY, UPDATE_CART_ITEM } from '../../constants/actions';

interface Action {
    type: string;
    payload: ProductItem | SelectedCategory;
}

const appReducer = (state: AppState, action: Action) => {
    const { type, payload } = action;
    switch (type) {
    //   case UPDATE_CART_ITEM:
    //     if (state.cartItems.find((e) => e.id === get(payload, "id"))) {
    //         return {
    //             ...state,
    //             cartCount: state.cartCount + 1,
    //             cartItems: state.cartItems.map((ele) => {
    //                 if (ele.id === get(payload, "id")) {
    //                     return { ...ele, qty: ele.qty + 1 };
    //                 }
    //                 return ele;
    //             }),
    //         };
    //     } else {
    //         const items:ProductItem = payload as ProductItem;
    //         return {
    //         ...state,
    //         cartCount: state.cartCount + 1,
    //         cartItems: state.cartItems.concat({ ...items, qty: 1 }),
    //       };
    //     }
  
    //   case REMOVE_CART_ITEM:
    //     const findItem = state.cartItems.find(
    //       (element) => element.id === get(payload, "id")
    //     );
    //     if (findItem) {
    //       if (findItem.qty > 1) {
    //         return {
    //           ...state,
    //           cartCount: state.cartCount - 1,
    //           cartItems: state.cartItems.map((ele) => {
    //             if (ele.id === get(payload, "id")) {
    //               return { ...ele, qty: ele.qty - 1 };
    //             }
    //             return ele;
    //           }),
    //         };
    //       } else {
    //         return {
    //           ...state,
    //           cartCount: state.cartCount - 1,
    //           cartItems: state.cartItems.filter((ele) => ele.id !== get(payload, "id")),
    //         };
    //       }
    //     } else {
    //       console.log("Item cannot be identified !");
    //       return { ...state };
    //     }
  
    //   case SET_SELECTED_CATEGORY:
    //     return {
    //       ...state,
    //       selectedCategory: payload,
    //     };

      default:
        return state;
    }
};

export default appReducer;
