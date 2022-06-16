import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import ProductPage from "./Pages/ProductPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="h-full w-full">
          <div className="shadow-md sticky h-full w-full top-0 z-40 bg-white">
            <Navigation></Navigation>
          </div>
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Home" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/products/:action" element={<ProductPage />} />
              <Route path="/products/" element={<ProductPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
