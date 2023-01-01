import Axios from "axios";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { Products } from "./views/products";
import { Cart } from "./views/cart";
import {
  CART_PAGE,
  PRODUCT_DETAIL_PAGE,
  PRODUCT_PAGE,
} from "./constants/routes";
import { CartContextItem, CartProvider } from "./context/cart";
import { useState } from "react";
import { Product } from "./apis/product";
import { ProductDetail } from "./views/product-detail";

Axios.defaults.baseURL = process.env.REACT_APP_API;

Axios.interceptors.request.use((config) => {
  return config;
});
Axios.interceptors.response.use((config) => {
  return config;
});

function App() {
  const [cartItems, setCartItems] = useState<CartContextItem[]>(
    [] as CartContextItem[]
  );

  const addCartItem = (product: Product, quantityToBeAdded: number) => {
    let foundIndex = -1;
    cartItems.every((item: CartContextItem, index) => {
      if (item.id === product.id) {
        foundIndex = index;
        return false;
      } else return true;
    });
    const newCartItems = [...cartItems];
    if (foundIndex >= 0) {
      if (newCartItems[foundIndex].quantity === 1 && quantityToBeAdded === -1) {
        newCartItems.splice(foundIndex, 1);
      } else
        newCartItems[foundIndex] = {
          ...cartItems[foundIndex],
          quantity: cartItems[foundIndex].quantity + quantityToBeAdded,
        };
    } else newCartItems.push({ ...product, quantity: 1 });
    setCartItems(newCartItems);
  };

  return (
    <CartProvider
      value={{
        cartItems,
        addCartItem,
      }}
    >
      <Router>
        <Routes>
          <Route path={PRODUCT_PAGE} element={<Products />} />
          <Route path={CART_PAGE} element={<Cart />} />
          <Route path={PRODUCT_DETAIL_PAGE} element={<ProductDetail />} />
          <Route path="*" element={<Navigate to={PRODUCT_PAGE}></Navigate>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
