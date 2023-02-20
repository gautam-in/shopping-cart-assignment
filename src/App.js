import React, { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import Register from "./routes/Register/Register";
import Products from "./routes/Products/Products";
import Cart from "./routes/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { setWindowSize } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);
  const routes = userId ? (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
  ) : (
    <Routes>
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace={true}/>}/>
    </Routes>
  );
  useLayoutEffect(() => {
    function updateSize() {
      dispatch(setWindowSize(window.innerWidth));
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className="bg-gray-200 h-screen">
        <header>
          <Header /> 
        </header>
        {routes}
        <footer className="bottom-0 w-full">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
