import React, { Fragment } from "react";
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
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavbarHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Navbar color="light" light expand="md">
        <Container>
          <Row>
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
                  <span className="nav-span">
                    <Link to="/products">Products</Link>
                  </span>
                </NavItem>
                {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              </Nav>
              {/* <NavbarText>Simple Text</NavbarText> */}
            </Collapse>
          </Row>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavbarHeader;
