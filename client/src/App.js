// import logo from "./logo.svg";
import Header from "./components/Header";
import { connect } from "react-redux";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { initiateAddCategory } from "redux/modules/category";
import Home from "./pages/Home";
import "./App.scss";
import Products from "pages/Products";
import { useEffect } from "react";

function App({ initiateAddCategory }) {
  useEffect(() => {
    initiateAddCategory();
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default connect(null, {
  initiateAddCategory,
})(App);
