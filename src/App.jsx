import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Products from "./pages/ProductsPage";
import Register from "./pages/Register";

const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
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
