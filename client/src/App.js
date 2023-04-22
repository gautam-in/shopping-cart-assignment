import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from './Components/Common/NotFound/NotFound';
import "react-toastify/dist/ReactToastify.css";
import './App.scss';

const Home = lazy(() => import("./Containers/Home/Home"));
// const ProductListing = lazy(() => import("./containers/productListing/ProductListing"));
const Login = lazy(() => import("./Containers/Login/Login"));
const Register = lazy(() => import("./Containers/Register/Register"));
// const Cart = lazy(() => import("./containers/cart/Cart"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<p>loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/products/:categoryId" element={<ProductListing />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
