import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductsSuccess } from "../Products/ProductActions";
import { getLogoutStart } from "../Login/LoginActions";
function Header() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getProductsSuccess());
  }, []);

  const {
    product: { cartItems = [] },
    login: { isLoggedIn = false },
  } = useSelector((state) => state);

  // logout
  const handleLogout = () => {
    dispatch(getLogoutStart());
    history.push("/login");
  };
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-left">
          <NavLink to="/" className="logo">
            <img src="static/images/logo.png" alt="" />
          </NavLink>
        </div>
        <div className="header-right">
          <nav className="header-right-top">
            {isLoggedIn ? (
              <a className="nav-link hide-sm" onClick={handleLogout}>
                Logout
              </a>
            ) : (
              <>
                <NavLink to="/login" className="nav-link hide-sm">
                  Login
                </NavLink>
                <NavLink to="/register" className="nav-link hide-sm">
                  Register
                </NavLink>
              </>
            )}
          </nav>
          <nav className="header-right-bottom">
            <NavLink to="/home" className="nav-link hide-sm">
              Home
            </NavLink>
            <NavLink to="/products" className="nav-link hide-sm">
              Products
            </NavLink>
            <NavLink to="/cart" className="nav-link ml-auto">
              <img src="static/images/cart.svg" alt="" />
              {cartItems && cartItems.length > 0 ? cartItems.length : 0} Items
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
