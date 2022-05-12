import "./App.css";
import "./main.scss";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import { Route, Routes } from "react-router-dom";
import ProductsComponent from "./components/ProductsComponent/ProductsComponent";
import CartComponent from "./components/CartComponent/CartComponent";
import RegisterComponenet from "./components/RegisterComponenet/RegisterComponenet";
import LoginComponent from "./components/LoginComponent/LoginComponent";

function App() {
  return (
    <div className="App">
      {/* <h1>Sabka Bazar</h1> */}
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />

        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponenet />} />
       
        <Route path="/products" element={<ProductsComponent />} />
        <Route path="/products/:type" element={<ProductsComponent />} />
        <Route path="/cart" element={<CartComponent />} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;