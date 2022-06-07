import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import ProductsView from "./routes/Products-view";
import Home from "./routes/Home";
import SignInPage from "./component/SignInPage";
import RegisterPage from "./component/RegisterPage";
import CartDropdown from "./component/CartDropdown";
import Copyright from "./component/Copyright";
import { checkCurrentUser } from "./store/slices/user/user.action";
import "./app.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkCurrentUser());
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="products/*" element={<ProductsView />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<RegisterPage />} />
          <Route path="cart" element={<CartDropdown />} />
        </Route>
      </Routes>
      <Copyright />
    </div>
  );
};

export default App;
