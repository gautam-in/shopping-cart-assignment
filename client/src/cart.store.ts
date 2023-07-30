import { create } from "zustand";

export type CartItem = {
  id: string;
  imageURL: string;
  name: string;
  price: number;
  quantity: number;
};

export type CartStore = unknown & {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: async (cartItem: CartItem) => {
    try {
      set((state) => ({
        cart: [...state.cart, cartItem],
      }));
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  },
  increaseQuantity: (cartItemId) => {
    set((state) => {
      const updatedCart = state.cart.map((cartItem) =>
        cartItem.id === cartItemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      return { cart: updatedCart };
    });
  },
  decreaseQuantity: (cartItemId) => {
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0), // Remove items with quantity <= 0
    }));
  },
}));
