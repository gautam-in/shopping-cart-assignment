import { createContext } from "react";
import { Product } from "../apis/product";

export interface CartContextItem extends Product {
  quantity: number;
}

export interface CartContextInterface {
  cartItems: CartContextItem[];
  addCartItem: (product: Product, quantityToBeAdded: number) => void;
}

export const CartContext: React.Context<CartContextInterface> = createContext({
  cartItems: [] as CartContextItem[],
  addCartItem: (product: Product, quantityToBeAdded: number) => {},
});

export const CartProvider = CartContext.Provider;
