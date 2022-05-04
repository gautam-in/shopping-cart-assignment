import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ProductListing from "./Components/ProductListing/ProductListing";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/cart' element={<Cart />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductListing />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
