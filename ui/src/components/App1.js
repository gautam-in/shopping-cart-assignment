import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Footer from "./Footer";
import { CartContext } from "../contexts/CartContext";
import "./App.css";

function App() {

  const [items, setItems] = useState({});
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  const cart = {
    cartItems: {},
    itemCount: 0,
    cartValue: 0,
    addItem: (product) => {
      if (cart.cartItems[product.id]) {
        console.log("item already existing!");
        //entry with count > 0
        cart.cartItems[product.id] = {
          // ...cart.cartItems[product.id],
          ...product,
          count: cart.cartItems[product.id].count + 1,
        };
        cart.itemCount++;
        cart.cartValue += cart.cartItems[product.id].price;
        // entry with count 0
      }
      //no entry
      else{
        cart.cartItems[product.id] = {
          // ...cart.cartItems[product.id],
          ...product,
          count: 1,
        };
        cart.itemCount++;
        cart.cartValue += cart.cartItems[product.id].price;
      }
        

      // console.log("item added - id: ", product.id);
      console.log("item added - cart: ", cart);
    },

    reduceItem: (product) => {
      cart.cartItems[product.id] = {
        // ...cart.cartItems[product.id],
        ...product,
        count: cart.cartItems[product.id].count - 1,
      };      
      cart.itemCount--;
      cart.cartValue -= cart.cartItems[product.id].price;
      cart.cartItems[product.id].count <= 0 && delete cart.cartItems[product.id];
      console.log("item added - cart: ", cart);
      console.log("item removed");
    }
  };
  
  return (
    <CartContext.Provider value={cart}>
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
