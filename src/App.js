import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import ProductView from "./routes/ProductView/ProductView";
import CartModel from "./components/CartModel/CartModel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/products/*" element={<ProductView />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="cart" element={<CartModel />} />
          <Route element={<div>404 Not Found</div>} />{" "}
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
