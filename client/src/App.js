import './App.scss';

import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./containers/home/Home"));
const ProductListing = lazy(() => import("./containers/productListing/ProductListing"));
const Login = lazy(() => import("./containers/login/Login"));
const Register = lazy(() => import("./containers/register/Register"));
const Cart = lazy(() => import("./containers/cart/Cart"));

export const NotFound = () => {
  return(
  <div className="pageNotFound">
    <h1>404</h1>
    <p>Page Not Found</p>
  </div>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<p>loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:categoryId" element={<ProductListing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
