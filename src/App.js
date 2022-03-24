import "./App.scss";
// import { Suspense, lazy } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbars from "./Components/Navbars";
import LoginPage from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import store from "./store/store";
import Product from "./Components/Product";
// import { Navigate, Route, Routes } from 'react-router-dom';
// const LoginPage = lazy(() => import('./Components/Login'));
// const Product=lazy(()=>import('./Components/Products'))
// const Register=lazy(()=>import('./Components/Register'));
// const Footer=lazy(()=>import('./Components/Footer'))
// const Cart=lazy(()=>import('./Components/Cart'))
// const Navbars=lazy(()=>import('./Components/Navbars'))

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbars />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/products" element={<Product />}></Route>
          </Routes>
          <Footer />
        </Router>
      </Provider>

    </>
  );
}

export default App;
