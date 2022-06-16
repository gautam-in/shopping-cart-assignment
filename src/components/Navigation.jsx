import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import { clearCart, count } from "../Redux/Reducers/cartSlice";
import { isLoggedIn, logout } from "../Redux/Reducers/LoginSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const isLogged = useSelector(isLoggedIn);
  const cartCount = useSelector(count);
  const navigate = useNavigate();
  const showCartHandler = () => {
    setShowCart(!showCart);
  };
  const showModalHandler = (refreshModal = false) => {
    if (!refreshModal) {
      setShowModal(false);
    } else {
      setShowModal(!showModal);
    }
  };

  const logoutHandler = (refreshModal = false) => {
    dispatch(logout());
    dispatch(clearCart());
    if (refreshModal) {
      if (showModal) {
        showModalHandler();
      }
    }

    navigate("/login");
  };

  return (
    <>
      <header className="sticky top-0  container h-22  bg-white">
        <div className="flex ">
          <img
            src="/static/images/logo_2x.png"
            alt="Logo"
            className=" sm:w-25 sm:h-20 w-22 h-12 sm:p-2 pl-1 pr-1 pt-1 pb-0.5"
          />
          <div className="md:pl-40 sm:block hidden sm:pl-10 p-2 pl-4  self-end">
            <div className="flex">
              <NavLink
                to="/Home"
                className={(navData) =>
                  navData.isActive
                    ? "text-lg pr-8 text-gray-700 hover:text-blue-400 active"
                    : "text-lg pr-8 text-gray-700 hover:text-blue-400"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/Products"
                className={(navData) =>
                  navData.isActive
                    ? "text-lg text-gray-700 active hover:text-blue-400"
                    : "text-lg text-gray-700 hover:text-blue-400"
                }
              >
                Products
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col  ml-auto  ">
            {!isLogged && (
              <div className=" sm:flex hidden ">
                <Link
                  to="/login"
                  className="text-lg text-gray-700 hover:text-blue-400"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="text-lg ml-4 text-gray-700 hover:text-blue-400"
                >
                  Register
                </Link>
              </div>
            )}
            {isLogged && (
              <div className=" sm:flex hidden pt-1">
                <label className="mr-2 "> welcome ,</label>
                <button
                  onClick={logoutHandler}
                  className="outline-1 p-1 outline rounded-md outline-blue-400 hover:text-blue-600 focus:text-blue-600 hover:outline-blue-600 focus:outline-blue-600 text-blue-400"
                >
                  Logout
                </button>
              </div>
            )}

            <div className="mt-auto  bg-light  ">
              <button
                onClick={showCartHandler}
                className="text-lg self-end pl-2 flex flex-row w-full text-center justify-center text-gray-700 hover:text-blue-400"
              >
                <svg
                  className="sm:h-8 sm:w-8  w-7 h-7  fill-rose-600"
                  version="1.1"
                  id="Layer_1"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
                <label className="cursor-pointer ">
                  {cartCount ? cartCount : 0} items
                </label>
              </button>
            </div>
          </div>
          <div className="sm:hidden block  self-end px-2 pt-2 pb-0.5">
            <button
              onClick={showModalHandler}
              className="flex items-center px-2 py-1 border rounded text-blue-500 border-blue-400 hover:text-blue-800 hover:border-blue-800 "
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        {showModal && (
          <div className="w-full sm:hidden block p-2">
            <div className="text-sm lg:flex-grow">
              <NavLink
                to="/Home"
                className={(navData) =>
                  navData.isActive
                    ? "text-lg pr-8  block border-b-2 hover:text-blue-400 text-blue-400 "
                    : "text-lg pr-8 text-gray-700 block border-b-2 hover:text-blue-400"
                }
                onClick={() => {
                  showModalHandler(true);
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/Products"
                className={(navData) =>
                  navData.isActive
                    ? "text-lg  block border-b-2 hover:text-blue-400 text-blue-400"
                    : "text-lg text-gray-700 hover:text-blue-400  block border-b-2"
                }
                onClick={() => {
                  showModalHandler(true);
                }}
              >
                Products
              </NavLink>
              {!isLogged && (
                <Link
                  to="/login"
                  className="text-lg pr-8 block hover:text-blue-400  text-gray-700 border-b-2"
                  onClick={() => {
                    showModalHandler(true);
                  }}
                >
                  LogIn
                </Link>
              )}
              {!isLogged && (
                <Link
                  to="/register"
                  className="text-lg block text-gray-700 hover:text-blue-400  border-b-2"
                  onClick={() => {
                    showModalHandler(true);
                  }}
                >
                  Register
                </Link>
              )}
              {isLogged && (
                <button
                  onClick={() => {
                    logoutHandler(true);
                  }}
                  className="text-lg block w-full  text-left text-gray-700 border-b-2"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </header>
      {showCart && <CartPage cartHandler={showCartHandler}></CartPage>}
    </>
  );
};

export default Navigation;
