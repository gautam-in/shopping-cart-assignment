import type { CartAction, Product } from "../types/customTypes";

export const cartReducer = (state: Product[], action: CartAction) => {
   switch(action.type) {
     case "add-item":
         return [...new Set([...state, action.data])];

      case "remove-item":
          return state.filter((product: Product) => product.id != action.data.id);

      case "update-item-qty":
          return [...new Set([...state, action.data])];

      default:
          return state;
   }
}