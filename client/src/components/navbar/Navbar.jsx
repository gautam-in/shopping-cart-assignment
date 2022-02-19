import React, { useState } from "react";
import "./navbar.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const NavbarHeader = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const productNavigateHandler = () => {
    if (localStorage.getItem("categoryId")) {
      localStorage.removeItem("categoryId");
      window.location.reload();
    } else {
      navigate("/products");
    }
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
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
            </Nav>
            <NavbarText>Cart</NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHeader;
