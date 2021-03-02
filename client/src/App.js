import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Routes from "./Routes";

import "./App.scss";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const [cart, setCart] = useState(false);
  const [categories, setCats] = useState([]);
  const cart1 = useSelector((store) => store.cart);
  localStorage.setItem("cart", JSON.stringify(cart1));
  console.log("cartAPP");

  React.useEffect(() => {
    var axios = require("axios");
    var config = {
      method: "get",
      url: "http://localhost:5000/categories",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setCats(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Router>
        
        <Header setCart={setCart} cart={cart} />
             
        <Routes categories={categories} setCart={setCart} />
           
        <Footer/>
 
      </Router>
    </>
  );
}

export default App;
