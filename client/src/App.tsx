import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./global.scss";
import Home from "./pages/Home";
import PageNotFound from "./pages/404";
import Products from "./pages/Products";
import Header from "./components/Header";
import { Login, Register } from "./pages/Auth";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/auth/signin" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />

          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
