import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./src/components/Header/Header.component";
import HomePage from "./src/pages/Home/Home.page.jsx";
import LoginPage from "./src/pages/Login/Login.page.jsx";
import SignupPage from "./src/pages/Signup/Signup.page.jsx";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/sign-up" element={<SignupPage />} />
        <Route  exact path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};
export default App;
