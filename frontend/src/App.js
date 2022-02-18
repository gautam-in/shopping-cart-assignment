import React, { useEffect, useState, useContext } from "react";
import HomePage from "./pages/homepage/homepage.component";
import ProductsPage from "./pages/ProductsDisplay/ProductsPage.component";
import Header from "./components/header/header.component.jsx";
import SignIn from "./pages/sign-in/sign-in.component";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./pages/registerPage/sign-up.component";
import Footer from "./components/footer/footer.component";
import { Switch, Route } from "react-router-dom";
import CheckoutPage from "./pages/checkout/checkout.page";
export const MyContext = React.createContext();
export const MyContextConsumer = MyContext.Consumer;

export const config = {
  endpoint: `http://localhost:5000`,
  banners: "/banners",
  products:"/products",
};

const someData = [{ title: "Hello World" }, { title: "hi" }];
function App() {
  let updatedCartItems;
  const [cartItems, setCartItems] = useState([]);
  const[cartShow,setCartShow]=useState(false);

  const calculateTtotal = () => {
    return cartItems.length
      ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
      : 0;
  };

  const removeItem = (e, cartItemToRemove) => {
    updatedCartItems = [...cartItems];
    updatedCartItems = updatedCartItems.filter(
      (cartTtem) => cartTtem.id !== cartItemToRemove.id
    );
    setCartItems(updatedCartItems);
  };
  const increaseCartQty = (e, cartItemToBeUpdated) => {
    updatedCartItems = [...cartItems];
    updatedCartItems = updatedCartItems.map((item) =>
     ( item.id === cartItemToBeUpdated.id && item.quantity<10)
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updatedCartItems);
  };

  const decereaseCartQty = (e, cartItemToRemove) => {
    updatedCartItems = [...cartItems];
    console.log("from app.js");
    let alreadyPresent = updatedCartItems.findIndex(
      (cartTtem) => cartTtem.id === cartItemToRemove.id
    );
    if (updatedCartItems[alreadyPresent].quantity === 1) {
      updatedCartItems = updatedCartItems.filter(
        (cartTtem) => cartTtem.id !== cartItemToRemove.id
      );
    } else {
      updatedCartItems = updatedCartItems.map((item) =>
        item.id === cartItemToRemove.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
    setCartItems(updatedCartItems);
  };

  const addItemToCart = (e, cartItemToBeAdded) => {
  
    let updatedCartItems = [...cartItems];
    let alreadyPresent = updatedCartItems.findIndex(
      (cartItem) => cartItem.id === cartItemToBeAdded.id
    );
    if (alreadyPresent !== -1) {
      updatedCartItems[alreadyPresent].quantity =
      updatedCartItems[alreadyPresent].quantity + 1;
      setCartItems(updatedCartItems);
      return;
    }

    cartItemToBeAdded.quantity = 1;
    updatedCartItems.push(cartItemToBeAdded);
    setCartItems(updatedCartItems);
  };
  return (
    <MyContext.Provider
      value={{
        cartItems,
        increaseCartQty,
        decereaseCartQty,
        addItemToCart,
        calculateTtotal,
        removeItem,
        cartShow,
        setCartShow
      }}
    >
      <>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/products" component={ProductsPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </>
    </MyContext.Provider>
  );
}

export default App;
