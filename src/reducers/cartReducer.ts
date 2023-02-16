import { TProduct } from "../apis/products";
import { TCart } from "../context/cartContext";


export type TAction = {
  type:"ADD_TO_CART" | "REMOVE_FROM_CART",
  payload:TProduct
}

export function cartReducer(state: TCart, action: TAction) {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToCart(state,action.payload);
    case "REMOVE_FROM_CART":
      return removeFromCart(state,action.payload)
    default:
      return state;
  }
}



function addToCart(state:TCart,product:TProduct) {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
  
}

function removeFromCart(state:TCart,product:TProduct) {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === product.id);

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
}