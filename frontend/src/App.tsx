import Axios from "axios";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { Products } from "./views/products";
import { Cart } from "./views/cart";
import { CART_PAGE, PRODUCT_PAGE } from "./constants/routes";
import { CartContextItem, CartProvider } from "./context/cart";
import { useState } from "react";
import { Product } from "./apis/product";

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

  console.log({ cartItems });

  const addCartItem = (product: Product, quantityToBeAdded: number) => {
    console.log("I am called", { product });
    let foundIndex = -1;
    cartItems.every((item: CartContextItem, index) => {
      if (item.id === product.id) {
        foundIndex = index;
        return false;
      } else return true;
    });
    const newCartItems = [...cartItems];
    if (foundIndex >= 0) {
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
          <Route path="*" element={<Navigate to={PRODUCT_PAGE}></Navigate>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
