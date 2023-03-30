import { Product } from "@/pages/api/product";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

export interface CartProduct {
  id: string;
  title: string;
  productImg: string | StaticImageData;
  price: number;
  quantity?: number;
}

export interface CartStore {
  cart: CartProduct[];
  getCartCount: () => number;
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, action: "increase" | "decrease") => void;
  showCart: boolean;
  toggleCart: () => void;
  getTotalCartValue: () => number;
  clearCart: () => void;
}

const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        getCartCount: () => {
          return get()?.cart?.length;
        },
        addToCart: (product: CartProduct) => {
          const cart = get().cart;
          const findProduct = cart.find((p) => p.id === product.id);
          if (findProduct) {
            findProduct.quantity! += 1;
          } else {
            cart.push({ ...product, quantity: 1 });
          }
          set({ cart });
        },
        removeFromCart: (productId: string) => {
          set({
            cart: get().cart.filter((product) => product.id !== productId),
          });
        },
        updateQuantity: (
          productId: string,
          action: "increase" | "decrease"
        ) => {
          let cart = get().cart;
          const findProduct = cart.find((p) => p.id === productId);
          if (findProduct) {
            if (action === "decrease") {
              if (findProduct.quantity === 1) {
                cart = cart.filter((product) => product.id !== productId);
              } else {
                findProduct.quantity =
                  findProduct.quantity! > 1
                    ? findProduct.quantity! - 1
                    : findProduct.quantity!;
              }
            } else {
              findProduct.quantity! += 1;
            }
          }
          set({ cart });
        },
        showCart: false,
        toggleCart: () => {
          set({ showCart: !get().showCart });
        },
        getTotalCartValue: () => {
          return get().cart?.reduce(
            (acc, cItem) => acc + cItem.price * cItem.quantity!,
            0
          );
        },
        clearCart: () => {
          set({ cart: [] });
        },
      }),
      { name: "cart" }
    )
  )
);

export default useCartStore;
