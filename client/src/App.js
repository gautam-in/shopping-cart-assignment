import React, { Suspense } from "react";
import "./App.css";
import Header from "./components/header/Header.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
const Footer = React.lazy(() => import("./components/footer/footer.component"));
const Home = React.lazy(() => import("./Page/Home"));
const Products = React.lazy(() => import("./Page/products/products.pages"));
const Login = React.lazy(() => import("./Page/login/login.pages"));
const Register = React.lazy(() => import("./Page/register/register.pages"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <div className="App">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
