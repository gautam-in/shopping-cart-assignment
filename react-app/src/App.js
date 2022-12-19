import HomePage from "./components/layouts/homePage/homePage";
import SignupForm from "../src/authorization/signupForm/signupForm";
import LoginForm from "../src/authorization/loginForm/loginForm";
import HeaderLayout from "./components/common/header/headerLayout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
import "./App.scss";
import CartComponent from "./components/layouts/cartComponent/cartComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signUp" element={<SignupForm />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/cart" element={<CartComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
