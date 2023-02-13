/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { StateCreator } from 'zustand';
import { Product } from '../../types/product';

export interface CartSlice {
  cart: Product[];
  totalPrice: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, action: 'increase' | 'decrease') => void;
  showCart: boolean;
  toggleCart: () => void;
}

export const createCartSlice: StateCreator<CartSlice> = (set, get) => ({
  cart: [],
  totalPrice: 0,
  addToCart: (product: Product) => {
    const { cart, totalPrice } = get();
    const findProduct = cart.find((p) => p.id === product.id);
    if (findProduct) {
      findProduct.quantity! += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    set({ cart, totalPrice: totalPrice + product.price });
  },
  removeFromCart: (productId: number) => {
    set({
      cart: get().cart.filter((product) => product.id !== productId),
      totalPrice: get().totalPrice - get().cart.find((p) => p.id === productId)!.price,
    });
  },
  updateQuantity: (productId: number, action: 'increase' | 'decrease') => {
    const { cart, totalPrice } = get();
    const findProduct = cart.find((p) => p.id === productId);
    if (findProduct) {
      if (action === 'decrease') {
        findProduct.quantity =
          findProduct.quantity! > 1 ? findProduct.quantity! - 1 : findProduct.quantity!;
      } else {
        findProduct.quantity! += 1;
      }
    }
    set({
      cart,
      totalPrice:
        action === 'decrease' ? totalPrice - findProduct!.price : totalPrice + findProduct!.price,
    });
  },
  showCart: false,
  toggleCart: () => {
    set({ showCart: !get().showCart });
  },
});
