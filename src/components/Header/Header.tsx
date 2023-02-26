import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import CartIcon from "../../static/images/cart.svg";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import Cart from "../../routes/Cart/Cart";
import {
  GlobalReducerInterface,
  CartReducerInterface,
} from "../../redux/interface";

const Header: React.FC<{}> = ({}) => {

  // const CartIcon= require("../../static/images/cart.svg")
  const windowSize = useSelector(
    (state: GlobalReducerInterface) => state.user.windowSize
  );
  const cartList: CartReducerInterface | {} = useSelector(
    (state: GlobalReducerInterface) => state.cart.cartList
  );
  const userId = useSelector(
    (state: GlobalReducerInterface) => state.user.userId
  );
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleCartRedirect = () => {
    if (windowSize && windowSize > 900) {
      setShowModal(true);
    } else {
      navigate("/cart");
    }
  };

  useEffect(() => {
    if (windowSize && windowSize > 900) {
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
        windowSize && windowSize > 400 ? "justify-around" : "justify-between"
      } p-2 box-shadow`}
    >
      <a aria-labelledby="logo">
        <img
          src={"/static/images/logo.png"}
          alt="logo"
          aria-labelledby="logo"
          height={50}
          width={150}
        />
      </a>
      {windowSize && windowSize > 400 ? (
        <nav className="flex items-center text-gray-600 w-2/3 font-semibold  gap-20">
          <Link to={"/"} className="mx-2">
            Home
          </Link>
          <Link to={"/products"} className="mx-2 ">
            Products
          </Link>
        </nav>
      ) : null}
      <div>
        {windowSize && windowSize > 400 ? (
          <nav className="flex text-gray-800 font-12 justify-end pb-2 gap-20">
            {!userId ? <Link to={"/login"}>SignIn</Link> : null}
            <Link to={"/register"}>Register</Link>
          </nav>
        ) : null}
        {/* <Link to={'/cart'}> */}
        <button
          className="bg-gray-300 p-3 flex justify-between items-center"
          onClick={handleCartRedirect}
          aria-label="cart"
        >
          <img
            src={'/static/images/cart.svg'}
            className="primary w-6 h-6"
            height={15}
            width={15}
          />
          <div>{cartList ? Object.keys(cartList).length : null} items</div>
        </button>
        {/* </Link> */}
      </div>
      {showModal && userId ? (
        <Modal setShowModal={setShowModal}>
          <Cart />
        </Modal>
      ) : null}
    </div>
  );
};

export default Header;
