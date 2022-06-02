import React from "react";

import "./Errormessage.css";

import { NavLink } from "react-router-dom";

import Footer from "./Footer";

function ErrorMessage({ updateErrorStatus }) {
  return (
    <>
      <div className="header-container">
        <header className="header">
          <NavLink to="/Home">
            <img className="logo" src="logo.png" alt="Sabka Bazar" />
          </NavLink>
          <nav className="nav">
            <NavLink activeClassName="activelink" to="/Home">
              Home
            </NavLink>
          </nav>
        </header>
      </div>
      <div className="errormessage-card">
        <h2>Something Went Wrong, Please try again after some time.</h2>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ErrorMessage;
