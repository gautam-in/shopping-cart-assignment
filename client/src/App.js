import { Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import Products from "./Pages/Products/products.component";
import Home from "./Pages/Home/home.component";
import SignIn from "./Pages/SignIn/sign-in.component";
import SignUp from "./Pages/SignUp/sign-up.component";
import Footer from "./Components/footer/footer.component";
import Header from "./Components/header/header.component";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products/:categoryId"} element={<Products />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/signin"} element={<SignIn />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
