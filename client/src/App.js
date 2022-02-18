import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.scss";

const LoginPage = lazy(() => import("./pages/login"));
const RegisterPage = lazy(() => import("./pages/register"));
const HomePage = lazy(() => import("./pages/home"));
const ProductPage = lazy(() => import("./pages/product"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:productname" element={<ProductPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
