import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../static/images/logo.png";
import { ReactComponent as CartIcon } from "../../static/images/cart.svg";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import Cart from "../../routes/Cart/Cart";

function Header({}) {
  const windowSize = useSelector((state) => state.user.windowSize);
  const cartList = useSelector((state) => state.cart.cartList);
  const userId = useSelector((state) => state.user.userId);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleCartRedirect = () => {
    if (windowSize > 900) {
      setShowModal(true);
    } else {
      navigate("/cart");
    }
  };

  useEffect(() => {
    if (windowSize > 900) {
      if (window.location.pathname === "/cart") {
        navigate("/");
        setShowModal(true);
      }
    } else {
      if (showModal) {
        navigate("/cart");
        setShowModal(false);
      }
    }
  }, [windowSize]);

  return (
    <div
      className={`my-1 flex bg-white ${
        windowSize > 400 ? "justify-around" : "justify-between"
      } p-2 box-shadow`}
    >
      <div>
        <img
          src={logo}
          alt="logo"
          className={`${windowSize > 400 ? "h-16" : "h-12"}`}
        />
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
            {!userId ? (
              <Link to={"/login"} className="mx-1">
                SignIn
              </Link>
            ) : null}
            <Link to={"/register"} className="mx-1">
              Register
            </Link>
          </nav>
        ) : null}
        {/* <Link to={'/cart'}> */}
        <div
          className="bg-gray-300 p-3 flex justify-between items-center"
          onClick={handleCartRedirect}
        >
          <CartIcon className="primary w-6 h-6" style={{ fill: "#d00455" }} />
          <div>{Object.keys(cartList).length} items</div>
        </div>
        {/* </Link> */}
      </div>
      {showModal && userId ? (
        <Modal setShowModal={setShowModal}>
          <Cart />
        </Modal>
      ) : null}
    </div>
  );
}

export default Header;
