import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Products from "./pages/ProductsPage";
import Register from "./pages/Register";
import { fetchCategories } from "./redux/fetchData/fetch.actions";
import { setProductsCategory } from "./redux/products/products.action";

const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  const dispatch = useDispatch();
  const category = new URLSearchParams(location.search).get("category");

  useEffect(() => {
    dispatch(fetchCategories());
    if (category) {
      dispatch(setProductsCategory(category));
    }
  }, []);

  return (
    <AppContainer>
      <Header />
      <RoutesContainer>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/login"
            element={currentUser ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </RoutesContainer>
      <Footer />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const RoutesContainer = styled.div`
  flex: 1;
`;

export default App;
