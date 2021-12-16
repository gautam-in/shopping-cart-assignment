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
  Login,
  HeaderWrap,
  User,
} from "./HeaderStyle";
import { useSelector } from "react-redux";

const Header = ({ cartSideNav }) => {
  const cartListData = useSelector((state) => state.cartReducer.cartList);
  const userLoggedData = useSelector((state) => state.userLoginReducer.data);

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
          <Login>
            {userLoggedData ? (
              <User> {userLoggedData} </User>
            ) : (
              <>
                <Link to="/login">SignIn</Link>
                <Link to="/signup">Register</Link>
              </>
            )}

            <Cart onClick={cartSideNav}>
              <CartMain>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>
                  {"  "}
                  {cartListData.length ? cartListData.length : 0} Items
                </span>
              </CartMain>
            </Cart>
          </Login>
        </Nav>
      </HeaderWrap>
    </HeaderMain>
  );
};
export default Header;
