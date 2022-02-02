import { Button, Col, Menu, Row } from "antd";
import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import cartImg from "../../Assets/images/cart.svg";
import Logo from "../../Assets/images/logo.png";
const CartModal = React.lazy(() => import("../modals/CartModal"));
const AppLogo = <img className="logo-img" alt="App Logo" src={Logo} />;
const CartImg = <img className="cart-icon" alt="Cart" src={cartImg} />;

function AppHeader({ totalItems = 0, authenticateUser, logoutUser }) {
  const [cartStatus, setCartVisibilityStatus] = useState(false);
  const toggleCartModalVisibility = (status) => {
    setCartVisibilityStatus(!status);
  };
  const { authUser, isAuthenticated, registeredUser } = authenticateUser || {};
  const handleLogout = () => {
    logoutUser();
  };
  return (
    <Row className="app-header shadow-btm flex">
      <Col span={6} className="logo clickable">
        {AppLogo}
        <Link className="navbar-brand" to="/"></Link>
      </Col>

      <Col span={14}>
        <Menu
          className="nav-menu"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="Home">
            <Link to="/home" className="link fontsize16 medium">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="Products">
            <Link to="/products/all" className="link fontsize16 medium">
              Products
            </Link>
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={4} className="action-icon">
        <Col className="links">
          {isAuthenticated ? (
            <span className="medium">{`${authUser.fname}  ${authUser.lname}`}</span>
          ) : (
            <Link to="/sign-in" className="link mr16 fontsize14  medium">
              SingIn
            </Link>
          )}
          {" | "}
          {!isEmpty(registeredUser) && isAuthenticated ? (
            <Link
              to="/"
              onClick={handleLogout}
              className="link fontsize14 medium"
            >
              Logout
            </Link>
          ) : (
            <Link to="/register" className="link fontsize14 medium">
              Register
            </Link>
          )}
        </Col>
        <Col
          className="cart clickable"
          onClick={() => {
            toggleCartModalVisibility(cartStatus);
          }}
        >
          {CartImg}
          <span>{totalItems} Items</span>
        </Col>
      </Col>
      {cartStatus && (
        <Suspense fallback={<div className="loader">Loading</div>}>
          <CartModal toggleCartModalVisibility={toggleCartModalVisibility} />
        </Suspense>
      )}
    </Row>
  );
}

export default AppHeader;
