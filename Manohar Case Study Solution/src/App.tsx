import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from "./logo.png";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Register from "./components/register/Register";
import SignIn from "./components/signin/SignIn";
import { useSelector } from "react-redux";

function App() {
  const size: boolean = useSelector((state: any) => state.size);
  return (
    <BrowserRouter>
      <header className="shadow p-3 mb-2 bg-white">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-4">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Main application logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="home-heading">
              <Link className="nav-link" to="/signin">
                SignIn
              </Link>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </div>
            <div>
              <Cart />
            </div>
          </div>
        </nav>
      </header>
      <main className="homepage">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </main>
      {size === false ? (
        <footer className="bg-grey text-center text-lg-start">
          <div
            className="footer-copyright text-center py-2"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
          >
            Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
          </div>
        </footer>
      ) : (
        <></>
      )}
    </BrowserRouter>
  );
}

export default App;
