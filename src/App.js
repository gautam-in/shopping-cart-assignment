import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./component/Nav";
import ProductsView from "./routes/Products-view";
import "./app.scss";
import Home from "./routes/Home";
import SignInPage from "./component/SignInPage";
import RegisterPage from "./component/RegisterPage";
import { auth, onAuthStateChangedListner } from "./utils/firebase.utils";
import { setCurrentUser } from "./store/slices/user/user.action";
import { selectUser } from "./store/slices/user/user.selector";
import { useEffect } from "react";
import CartDropdown from "./component/CartDropdown";
import Copyright from "./component/Copyright";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubcribe = auth.onAuthStateChanged((authUser) => {
  //     console.log("on auth changed", authUser);
  //     if (authUser) {
  //       dispatch(
  //         setCurrentUser({
  //           uid: authUser.uid,
  //           email: authUser.email,
  //         })
  //       );
  //     }

  //     return unsubcribe;
  //   });
  // }, [dispatch]);

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListner((user) => {
      dispatch(setCurrentUser(user));
    });

    return unsubcribe;
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

// <Route path="products/:categoryId" element={<ProductsView />} />
