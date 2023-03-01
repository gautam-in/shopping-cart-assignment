import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "./components";
import { Footer, Header } from "./components";

const Cart = lazy(() => import("./pages/cart/Cart"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/auth/Login"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));
const Register = lazy(() => import("./pages/auth/Register"));
const Reset = lazy(() => import("./pages/auth/Reset"));

const ProductDetails = lazy(() =>
  import("./components/products/productDetails/ProductDetails")
);

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />

            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
