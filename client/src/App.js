import "./App.css";
import Header from "./components/header/Header.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import CustomButton from "./components/custom-button/custom-buttom.component";
import SignIn from "./components/sign-in/sign-in.component";
import Login from "./Page/login/login.pages";
import Footer from "./components/footer/footer.component";
import Register from "./Page/register/register.pages";
import Slider from "./components/carousel/Slider";
import CategoryCard from "./components/category-card/category-card.component";
import Products from "./Page/products/products.pages";
import SignUp from "./components/sign-up/sign-up.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import CartDropdown from "./components/cart-dropdown/cart-dropdown.component";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Router>
          <Header />
          {/* <Slider /> */}
          <CartDropdown />
          {/* <Footer /> */}
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
