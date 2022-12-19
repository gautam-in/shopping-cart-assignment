import { Routes, Route } from "react-router-dom";
import CartComponent from "./components/layouts/cartComponent/cartComponent";
import ProductPage from "./components/layouts/productPage/products";
import BannerPage from "./components/layouts/bannerPage/bannerPage";
import SignupForm from "../src/authorization/signupForm/signupForm";
import LoginForm from "../src/authorization/loginForm/loginForm";
import HeaderLayout from "./components/common/header/headerLayout";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<BannerPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signUp" element={<SignupForm />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
