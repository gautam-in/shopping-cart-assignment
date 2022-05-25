import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Nav from "./component/Nav";
import ProductsView from "./routes/Products-view";
import "./app.scss";
import Home from "./routes/Home";
import SignInPage from "./component/SignInPage";
import RegisterPage from "./component/RegisterPage";
import { auth } from "./utils/firebase.utils";
import { login, logout } from "./redux/features/userSlice";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductsView />} />
          <Route path="products/:categoryId" element={<ProductsView />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<RegisterPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
