import { Fragment,useState,useEffect,useContext } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Images/logo.png";
import CartIcon from "./CartIcon/CartIcon";
import AuthContext from "../../store/Auth/Context";
import CartContext from "../../store/Cart/Context";

const Brand = Styled.div`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
`;
const Header = Styled.header`
  padding: 0 20px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 5px rgba(95, 94, 94, 0.25);
`;

const Nav = Styled.nav`
  @media only screen and (max-width: 600px) {
      display: none
  }
`;

const BrandLogo = Styled.img`
  max-width: 150px;
  width: 100;
  height: 100;
  @media only screen and (max-width: 600px) {
    max-width: 120px;
}
`;

const HamburgerIcon = Styled.div`
  margin: auto 0;
  display: none;
  cursor: pointer;
  padding-right: 10px;

  & div {
    width: 22px;
    height: 3px;
    background-color: black;
    margin: 6px 0;
    transition: 0.4s;
  }
  @media only screen and (max-width: 600px) {
    display: block;
}
`;

const Bar1 = Styled.div`
    -webkit-transform:${(props) =>
      props.open ? "rotate(-45deg) translate(-6px, 6px)" : "none"};
    transform: ${(props) =>
      props.open ? "rotate(-45deg) translate(-6px, 6px)" : "none"};
`;
const Bar2 = Styled.div`  
    opacity: ${(props) => (props.open ? 0 : "")};
`;
const Bar3 = Styled.div`
    -webkit-transform: ${(props) =>
      props.open ? "rotate(45deg) translate(-6px, -8px)" : "none"};
    transform: ${(props) =>
      props.open ? "rotate(45deg) translate(-6px, -8px)" : "none"};
`;

const MobileMenu = Styled.ul`
  display: ${(props) => (props.open ? "flex" : "none")};;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 100px;
  left: 0;
  height: calc(100vh - 50px);
  width: 100%;
  z-index: 10;
  background-color: #f9f9f9;
`;

const MobileMenuLi = Styled.li`
      padding: 10px 0px;
      display: block;
      border-bottom: 0.5px solid lightgray;
      width: 100%;
      text-align: center;
      & a{
        font-weight: 200;
        color: black;
        font-size: 18px;
      }

      & a:hover {
        color: #bf2957;
      }
`;

const MenuItem = Styled.ul`
  list-style: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: black;
`;

const MenuItemLink = Styled.li`
  padding: 14px;
  & a{
    color: black;
  }
  & a:hover {
  color: #bf2957;
  }

`;

const RightHeaderSection = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
`;
const RightHeaderLinks = Styled.div`
    & a{
      color: black;
      padding: 10px 4px 2px 2px;
    }
    & a:hover{
      color: #bf2957;
    }
`;

const SignOutLink = Styled.span`
    cursor: pointer;
`
const HeaderComponent = () => {

  const [toggle, setToggle] = useState(false);
  const [ showSignOut, setShowSignOut ] = useState(false)
  const [cartQuantiy, setCartQuantity ] = useState(0)

  const authContext = useContext(AuthContext);
  const cartContext = useContext(CartContext);

  const { logout, isAuthenticated } = authContext;
  const { openCartModal,cartTotalQuantity } = cartContext;

  useEffect(() => {
        setShowSignOut(isAuthenticated)
  },[isAuthenticated])

  useEffect(() => {
    setCartQuantity(cartTotalQuantity)
  },[cartTotalQuantity])


  const toggleMobileMenu = (e) => {
    setToggle(!toggle);
  };

  const handleSignOut = () => {
    logout()
  }

  const handleModalOpen = () => {
    openCartModal()
  }
 
  return (
    <>
    <Header>
      <Brand>
        <HamburgerIcon onClick={(e) => toggleMobileMenu(e)}>
          <Bar1 open={toggle}></Bar1>
          <Bar2 open={toggle}></Bar2>
          <Bar3 open={toggle}></Bar3>
          <MobileMenu open={toggle}>
            <MobileMenuLi>
              <Link to="/">Home</Link>
            </MobileMenuLi>
            <MobileMenuLi>
              <Link to="/products">Products</Link>
            </MobileMenuLi>
          </MobileMenu>
        </HamburgerIcon>
        <Link to="/">
          <BrandLogo src={Logo} alt="brandlogo" />
        </Link>
      </Brand>
      <Nav>
        <MenuItem>
          <MenuItemLink>
            <Link to="/">Home</Link>
          </MenuItemLink>
          <MenuItemLink>
            <Link to="/products">Products</Link>
          </MenuItemLink>
        </MenuItem>
      </Nav>
      <RightHeaderSection>
        <RightHeaderLinks>
          {!showSignOut ? 
             (
              <Fragment>
                <Link to="/login">SignIn</Link>
                <Link to="/register">Register</Link>
              </Fragment>
              ) : (
              <SignOutLink onClick={handleSignOut}>
                  <Link to="/">Sign Out</Link>
              </SignOutLink>
          )}
        </RightHeaderLinks>
            <CartIcon handleModalOpen={handleModalOpen} cartTotalQuantity={cartQuantiy}/>
      </RightHeaderSection>
    </Header>
    </>
  );
};

export default HeaderComponent;
