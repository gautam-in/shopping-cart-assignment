import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../../Images/logo.png";
import {
  HeaderMain,
  Logo,
  Nav,
  Home,
  Cart,
  CartMain,
  Home1,
  HeaderWrap,
  Login,
} from "./HeaderStyle";
import { useSelector } from "react-redux";

const Header = ({ cartSideNav }) => {
  const cartListData = useSelector((state) => state.cartReducer.cartList);

  return (
    <HeaderMain>
      <HeaderWrap>
        <Link to="/">
          <Logo src={logo} alt="Sabka Bazar" />
        </Link>
        <Nav>
          <Home>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
          </Home>
          <Home1>
            <Login>
              <Link to="/login">SignIn</Link>
              <Link to="/signup">Register</Link>
            </Login>
            <Cart onClick={cartSideNav}>
              <CartMain>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>
                  {"  "}
                  {cartListData.length ? cartListData.length : 0} Items
                </span>
              </CartMain>
            </Cart>
          </Home1>
        </Nav>
      </HeaderWrap>
    </HeaderMain>
  );
};
export default Header;
