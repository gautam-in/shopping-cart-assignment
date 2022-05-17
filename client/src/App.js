import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header"
import Home from "./components/home/home"
import Footer from './components/footer/footer';
import Product from './components/products/product';
import Cart from "./components/cart/cart";
import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUp";
import axios from "axios";
import './App.css';

const App = () => {
  const [category, setCategory] = useState([]);
  const cartItemsCount = useSelector((state) => state.cartReducer.cartItems)

  useEffect(() => {
    // api to fetch product categories.
    const fetchCategories = async () => {
      var response = await axios.get("http://localhost:5000/categories");
      var categoryData = await response.data;
      setCategory(categoryData);
    };

    fetchCategories();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header cartItemCount={cartItemsCount} />
        <Routes>
          <Route path="/" element={<Home category={category} />}></Route>
          <Route path="signIn" element={<SignIn />}></Route>
          <Route path="signUp" element={<SignUp />}></Route>
          <Route exact path="home" element={<Home category={category} />}></Route>
          <Route exact path="products" element={<Product category={category} />}></Route>
          <Route exact path="cart" element={<Cart />}></Route>
          <Route exact path="products/:categoryId" element={<Product category={category} />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
