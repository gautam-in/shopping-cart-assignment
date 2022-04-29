import "./App.css";
import "./custom-styles.scss";
import Header from "./components/layout/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/layout/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Signup from "./pages/SignUp/Signup";
import Login from "./pages/SignIn/Login";

function App() {
  return (
    <div className="App">
      {/* <h1>Sabka Bazar</h1> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:type" element={<Products />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
