import { allRoutes } from "navigation/allRouteNames";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../../atoms/image/image";
import { useSelector, useDispatch } from "react-redux";
import "./header.scss";
import { IState } from "store/interfaces";
import { LocalStorage } from "services/storage";
import { SignInActions } from "modules/signIn/redux/actions/actions";

interface IProps {}

const Header = (props: IProps): React.ReactElement => {
  let userStatus = useSelector((state: IState) => state.signIn.status);
  let userEmail = LocalStorage.getStorage("email");
  const dispatch = useDispatch();

  const handleLogout = () => {
    LocalStorage.clearStorage();
    dispatch(SignInActions.clearStore());
  };

  useEffect(() => {
    if (!userStatus && userEmail) {
      handleLogout();
    }
  }, [userStatus]);

  return (
    <div className="main-header">
      <div className="left-nav-container">
        <Link to={allRoutes.HOME}>
          <Image src={"/static/images/logo.png"} alt="logo" customClass="logo" />
        </Link>

        <div className="main-navbar">
          <ul>
            <li>
              <Link to={allRoutes.HOME} className="main-navbar-link">
                Home
              </Link>
            </li>
            <li>
              <Link to={allRoutes.PRODUCTS} className="main-navbar-link">
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-navbar">
        <div className="signin-navbar">
          {!userStatus ? (
            <ul>
              <li>
                <Link to={allRoutes.LOGIN} className="signin-navbar-link">
                  SignIn
                </Link>
              </li>
              <li>
                <Link to={allRoutes.REGISTER} className="signin-navbar-link">
                  Register
                </Link>
              </li>
            </ul>
          ) : (
            <Link to="/" className="signin-navbar-link" onClick={() => handleLogout()}>
              Logout
            </Link>
          )}
        </div>
        <div className="cart-box" onClick={() => {}}>
          <img src={"/static/images/cart.svg"} alt="cart-icon" />
          {/* <span>{`(${cartItems ? cartItems.products.length : 0} items)`}</span> */}
          {/* {cartItems ? <span>{`(${cartItems.products.length} items)`}</span> : <span>{`(0 items)`}</span>} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
