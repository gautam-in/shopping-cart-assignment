import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "./sass/_mainStyle.scss"
import HomePage from "./pages/home"
import ProductPage from "./pages/product"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Route
      exact
      path="/"
      exact={true}
      render={() => {
        return <HomePage/>
      }}
      />
      <Route
      exact
      path="/products"
      exact={true}
      render={() => {
        return <ProductPage/>
      }}
      />
      <Route
      exact
      path="/login"
      exact={true}
      render={() => {
        return <LoginPage/>
      }}
      />
      <Route
      exact
      path="/register"
      exact={true}
      render={() => {
        return <RegisterPage/>
      }}
      />
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
