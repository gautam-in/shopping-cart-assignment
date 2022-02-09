import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Footer from "./Footer";
import { CartContext } from "../contexts/CartContext";
import "../styles/App.scss";

function App() {
  const [cartItems, setCartItems] = useState({});
  const [itemCount, setItemCount] = useState(0);
  const [cartValue, setCartValue] = useState(0);

  // cartItems: {},
  // itemCount: 0,
  // cartValue: 0,
  const addItem = (product) => {
    if (cartItems[product.id]) {
      console.log("item already existing!");
      //entry with count > 0
      // cart.cartItems[product.id] = {
      //   // ...cart.cartItems[product.id],
      //   ...product,
      //   count: cart.cartItems[product.id].count + 1,
      // };
      setCartItems({
        // ...cart.cartItems[product.id],
        ...cartItems,
        [product.id]: {
          ...product,
          count: cartItems[product.id].count + 1,
        },
      });

      // cart.itemCount++;
      setItemCount(itemCount + 1);
      // cart.cartValue += cart.cartItems[product.id].price;
      setCartValue(cartValue + cartItems[product.id].price);
      // entry with count 0
    }
    //no entry
    else {
      setCartItems({
        // ...cart.cartItems[product.id],
        ...cartItems,
        [product.id]: { ...product, count: 1 },
      });
      // cart.itemCount++;
      setItemCount(itemCount + 1);
      // cart.cartValue += cart.cartItems[product.id].price;
      setCartValue(cartValue + product.price);
    }

    // console.log("item added - id: ", product.id);
    console.log("item added - cart: ", cartItems);
  };

  const reduceItem = (product) => {
    //   cart.cartItems[product.id] = {
    //     // ...cart.cartItems[product.id],
    //     ...product,
    //     count: cart.cartItems[product.id].count - 1,
    //   };
    setCartItems({
      // ...cart.cartItems[product.id],
      ...cartItems,
      [product.id]: {
        ...product,
        count: cartItems[product.id].count - 1,
      },
    });
    //   cart.itemCount--;
    setItemCount(itemCount - 1);
    //   cart.cartValue -= cart.cartItems[product.id].price;
    setCartValue(cartValue - cartItems[product.id].price);
    //   cart.cartItems[product.id].count <= 0 && delete cart.cartItems[product.id];
    // cartItems[product.id].count <= 0 && delete cartItems[product.id];
    if (cartItems[product.id].count <= 1) {
      const newCartItems = { ...cartItems };
      delete newCartItems[product.id];
      console.log("newCartItems -- ",newCartItems);
      setCartItems({ ...newCartItems });
    }
    console.log("item removed - cart: ", cartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemCount,
        cartValue,
        addItem,
        reduceItem,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Navbar></Navbar>
          <MainContent></MainContent>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  );
}

export default App;
