import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { createContext, useState } from "react";

import Footer from "./Components/Footer/Footer.component";
import Header from "./Components/Header/Header.component";
import HomePage from "./Pages/HomePage/HomePage.component";
import Shop from "./Pages/Shop/Shop.component";
import Signin from "./Pages/SigninAndRegister/Signin.component";
import Register from "./Pages/SigninAndRegister/Register.component";

//User Signin Check by context
export const UserContext = createContext(null);

function App() {
  const [USER, setUser] = useState({ userSigned: false, name: "" });
  return (
    <React.Fragment>
      <UserContext.Provider value={{ USER, setUser }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:categoryName" element={<Shop />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserContext.Provider>
      <Footer />
    </React.Fragment>
  );
}

export default App;
