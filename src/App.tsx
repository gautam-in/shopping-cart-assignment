import React, { useLayoutEffect } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Login from "./routes/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { setWindowSize } from "./redux/userSlice";
import { GlobalReducerInterface } from "./redux/interface";

const Home = lazy(() => import("./routes/Home/Home"));
const Register = lazy(() => import("./routes/Register/Register"));
const Products = lazy(() => import("./routes/Products/Products"));
const Cart = lazy(() => import("./routes/Cart/Cart"));

const App: React.FC = () => {
  const dispatch = useDispatch();
  const userId = useSelector(
    (state: GlobalReducerInterface) => state.user.userId
  );
  const routes = userId ? (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Suspense>
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
    </Suspense>
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
      <div className="layout-screen h-screen">
        <header>
          <Header />
        </header>
        {routes}
        <footer className="w-full bg-gray-200 flex justify-center items-center">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
