import React, { Suspense, useState } from "react";
import { Menu, Row, Col } from "antd";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../Assets/images/logo.png";
import cartImg from "../../Assets/images/cart.svg";
const CartModal = React.lazy(() => import("../modals/CartModal"));
const AppLogo = <img className="logo-img" alt="App Logo" src={Logo} />;
const CartImg = <img className="cart-icon" alt="Cart" src={cartImg} />;

function AppHeader({ totalItems = 0 }) {
  const [cartStatus, setCartVisibilityStatus] = useState(false);
  const toggleCartModalVisibility = (status) => {
    setCartVisibilityStatus(!status);
  };
  const totalCount = useSelector((state: any) => state.cart.count);
  return (
    <Row className="app-header shadow-btm flex">
      <Col span={6} className="logo">
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
            <Link to="/home" className="link medium">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="Products">
            <Link to="/products/all" className="link medium">
              Products
            </Link>
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={4} className="action-icon">
        <Col className="links">
          <Link to="/sign-in" className="link mr16  medium">
            SingIn
          </Link>
          <Link to="/register" className="link medium">
            Register
          </Link>
        </Col>
        <Col
          className="cart"
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
