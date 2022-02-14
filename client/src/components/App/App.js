import logo from "../../../src/logo.svg";
import Layout from "../Layout/Layout";
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Products from "../pages/products/Products";
import SignIn from "../pages/signin/Signin";
import Register from "../pages/register/Register";
import Cart from "../Cart/Cart"

function App() {
  return (
    <Layout title="online shopping">
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:categoryId" element={<Products />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="*">Page Not Found</Route>
        </Routes>             
      </Layout>
  );
}

export default App;
