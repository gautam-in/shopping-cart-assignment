import React, { Suspense } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartProvider from "./store/CartProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const LazyHomeComponent = React.lazy(() => import("./pages/home"));
const LazyProductComponent = React.lazy(() => import("./pages/Products"));
const LazyLoginComponent = React.lazy(() => import("./components/Login"));
const LazyRegisterComponent = React.lazy(() => import("./components/Register"));
const LazyCartComponent = React.lazy(() => import("./components/Cart"));


function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<LazyHomeComponent />} />
              <Route path="/login" element={<LazyLoginComponent />} />
              <Route path="/register" element={<LazyRegisterComponent />} />
              <Route path="/cart" element={<LazyCartComponent />} />
              <Route path="/products">
                <Route index element={<LazyProductComponent />} />
                <Route path=":categoryId" element={<LazyProductComponent />} />
              </Route>
            </Routes>
          </Suspense>

          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
