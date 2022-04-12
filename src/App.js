import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { Fragment } from "react";
import Login from "./components/login/Login";
import HeaderFooterWrapper from "./components/wrapper/HeaderFooterWrapper";
import Signup from "./components/signup/Signup";
import Products from "./components/product/Products";
import PageNotFound from "./components/pageNotFound/PageNotFound";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HeaderFooterWrapper />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="products/*" element={<Products />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Fragment>
  );
};
export default App;
