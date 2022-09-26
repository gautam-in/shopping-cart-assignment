import "./App.css";
import "./custom.css"
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import SignUp from "./components/signUp/SignUp";
import SignIn from "./components/signIn/SignIn";
import Products from "./components/products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
