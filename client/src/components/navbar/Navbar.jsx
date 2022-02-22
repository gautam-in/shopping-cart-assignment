import React, { Fragment, useState } from "react";
import "./navbar.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  NavbarText,
  Container,
} from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../MainContext";
import CartContainer from "../Cart/CartContainer";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const NavbarHeader = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { cartTotalItems, cartItems, user } = useContext(MainContext);
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    console.log(anchor, event, open);
    // if (
    //   event.type === "keydown" &&
    //   (event.key === "Tab" || event.key === "Shift")
    // ) {
    //   return;
    // }

    setState({ ...state, [anchor]: open });
  };

  const closeDrawer = (anchor, status) => {
    setState({ ...state, [anchor]: status });
  }

  const toggle = () => setIsOpen(!isOpen);

  const productNavigateHandler = () => {
    if (localStorage.getItem("categoryId")) {
      localStorage.removeItem("categoryId");
      window.location.reload();
    } else {
      navigate("/products");
    }
  };

  const cartPage = (anchor) => {
    console.log(anchor);

    return (
      <Fragment>
        <div
          className="list"
          role="presentation"
          // onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <CartContainer cartItems={cartItems} toggleDrawer={closeDrawer} />
        </div>
      </Fragment>
    );
  };

  return (
    <div>
      <Navbar color="light" light expand="md" className="custom_navbar_margin">
        <Container>
          <NavbarBrand href="/">
            <img
              src="/static/images/logo_2x.png"
              alt="logo"
              className="logo-responsive"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem style={{ padding: 7 }}>
                <span className="nav-span">
                  {" "}
                  <Link to="/"> Home</Link>
                </span>
              </NavItem>
              <NavItem style={{ padding: 7 }}>
                <span className="nav-span" onClick={productNavigateHandler}>
                  Products
                </span>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                {/* <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu> */}
              </UncontrolledDropdown>
              {!user ? (
                <Fragment>
                  <NavItem className="login-navitem">
                    <span className="nav-span">
                      <Link to="/signin">Login</Link>
                    </span>
                  </NavItem>
                  <NavItem className="login-navitem-signup">
                    <span className="nav-span">
                      <Link to="/register"> Register </Link>
                    </span>
                  </NavItem>
                </Fragment>
              ) : (
                <NavItem className="login-navitem-userName">
                  <span className="nav-span">Hi, {user?.firstName}</span>
                </NavItem>
              )}
            </Nav>

            <NavbarText
              className="navbar_text_margin_padding"
              onClick={toggleDrawer("right", true)}
            >
              <img
                src="/static/images/cart.svg"
                alt="Cart"
                className="cart_img"
              />
              {cartTotalItems} items
            </NavbarText>
          </Collapse>
        </Container>
      </Navbar>

      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {cartPage("right")}
      </Drawer>
    </div>
  );
};

export default NavbarHeader;
