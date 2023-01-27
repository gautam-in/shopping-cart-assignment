import { Route, Routes } from "react-router-dom";
import Banner from "./Features/banner/Banner";
import Categories from "./Features/categories/Categories";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import Register from "./pages/Register";

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products" element={<Products />}>
            <Route path=":id" element={<Products />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
