import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../static/images/logo.png";
import { ReactComponent as Cart } from "../../static/images/cart.svg";
import { useSelector } from "react-redux";
function Header({}) {
  const windowSize = useSelector(state => state.user.windowSize)
  
  return (
    <div className={`my-1 flex bg-white ${windowSize>400?'justify-around':'justify-between'} p-2 box-shadow`}>
      <div>
        <img src={logo} alt="logo" className={`${windowSize>400?'h-16':'h-12'}`} />
      </div>
      {windowSize > 400 ? (
        <nav className="flex items-end text-gray-600 w-2/3 font-semibold pb-4">
          <Link to={"/"} className="mx-2">
            Home
          </Link>
          <Link to={"/products"} className="mx-2 ">
            Products
          </Link>
        </nav>
      ) : null}
      <div>
        {windowSize > 400 ? (
          <nav className="flex text-gray-800 font-12 justify-end pb-2">
            <Link to={"/login"} className="mx-1">
              SignIn
            </Link>
            <Link to={"/register"} className="mx-1">
              Register
            </Link>
          </nav>
        ) : null}
        <div className="bg-gray-300 p-3 flex justify-between items-center">
          <Cart className="primary w-6 h-6" style={{ fill: "#d00455" }} />
          <div>0 items</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
