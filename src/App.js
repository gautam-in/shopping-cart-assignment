import "./App.scss";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbars from "./Components/Navbars";
import LoginPage from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import store from "./store/store";
import Product from "./Components/Product";


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
