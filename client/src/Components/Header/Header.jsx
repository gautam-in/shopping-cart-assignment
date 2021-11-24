import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Cart } from "../Cart/Cart";
import { Footer } from "../Footer/Footer";
import { CartContext } from "../../Context/CartContext";

export const Header = () => {
  const [cartIsOpen, setCart] = useState(false);
  const context = useContext(CartContext);

  const handleCart = () => {
    setCart(!cartIsOpen);
  };

  return (
    <div className="fixed w-full bg-white z-10">
      <div className="flex relative justify-between h-20 items-center shadow-md w-full px-10">
        <div className="flex items-center">
          <Link to="/login">
            <img alt="logo" className="w-4/6" src={Logo} />
          </Link>
        </div>
        <div className="flex w-1/2 justify-start">
          <Link to="/home" className="sm:text-sm">
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
            <Link className="links text-sm ml-4 sm:ml-2" to="/registration">
              Register
            </Link>
          </div>
          <div
            onClick={handleCart}
            className="flex items-center cursor-pointer justify-center w-32 bg-gray-200 sm:bg-transparent p-2 "
          >
            <FaShoppingCart className="mr-2" color="red" size="20" />
            <h3 className=" sm:hidden">{context?.totalItemsCount} items</h3>
          </div>
        </div>
      </div>
      {cartIsOpen && <Cart closeCart={handleCart} />}
      <Footer />
    </div>
  );
};
