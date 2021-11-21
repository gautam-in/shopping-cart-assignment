import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/logo.png";
import { FaShoppingCart } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="flex justify-between h-20 items-center shadow-md w-full px-16 pt-2">
      <div className="flex items-center">
        <Link to="/login">
          <img alt="logo" className="w-4/6" src={Logo} />
        </Link>
      </div>
      <div className="flex w-1/2 justify-start">
        <Link to="/" className="sm:text-sm">
          <h3>Home</h3>
        </Link>
        <Link to="/products" className="ml-12 sm:ml-2 sm:text-sm">
          <h3>Products</h3>
        </Link>
      </div>

      <div className="ml-5 sm:ml-2">
        <div className="mb-2 sm:mb-0">
          <Link className="links text-sm" to="/login">
            SignIn
          </Link>
          <Link className="links text-sm ml-4 sm:ml-2" to="/register">
            Register
          </Link>
        </div>
        <div className="flex items-center cursor-pointer justify-center md w-32 sm:hidden bg-gray-200 p-2 ">
          <FaShoppingCart className="mr-2" color="red" size="20" />
          <h3>0 items</h3>
        </div>
      </div>
    </div>
  );
};
