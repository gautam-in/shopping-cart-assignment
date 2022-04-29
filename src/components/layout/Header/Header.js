import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../../logo.png";
import ModalCart from "../../../pages/Cart/ModalCart";
import { uiActions } from "../../../store/uiSlice";
import "./Header.scss";

const Header = () => {
  const cartQty = useSelector((state) => state.cartReducer.totalQty);
  const isMobile = useSelector((state) => state.uiReducer.isMobile);
  const isTablet = useSelector((state) => state.uiReducer.isTablet);
  const showCart = useSelector((state) => state.uiReducer.showCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const displayCart = () => {
    dispatch(uiActions.setshowCart({ show: true }));
    if (isMobile) {
      navigate("/cart");
    }
    if (isTablet) {
      navigate("/cart");
    }
    if (!isMobile && !isTablet) {
      navigate("/products");
    }
  };
  return (
    <>
      <Navbar bg="light" expand="lg" className="nav">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} className="nav-logo-img" alt="logo" />
          </Navbar.Brand>

          <Nav
            className="me-auto my-2 my-lg-0 m-text"
            style={{ maxHeight: "100px" }}
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
          <div>
            <Nav className=" m-text">
              <Nav.Link href="/signin">SignIn</Nav.Link>
              <Nav.Link href="/signup">Register</Nav.Link>
            </Nav>

            <Button
              to="/cart"
              style={{ backgroundColor: "#ece9e9", color: "black" }}
              onClick={displayCart}
              className="cart-btn m-text"
            >
              <img src="./static/images/cart.svg" alt="cart" />
              &nbsp;{cartQty} items
            </Button>
          </div>
        </Container>
      </Navbar>
      {showCart && <ModalCart />}
    </>
  );
};

export default Header;
