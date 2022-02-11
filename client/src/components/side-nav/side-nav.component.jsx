import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';

import NavbarComponent from '../navbar/navbar.component';
import CATEGORY_DATA from '../../server/categories/index.get.json';
import './side-nav.styles.scss';

const SideNav = ({ selectedCategory }) => {
  const [categoryData, setCategoryData] = useState(CATEGORY_DATA);

  useEffect(() => {
    if (selectedCategory)
      setCategoryData(
        CATEGORY_DATA.filter((category) => category.id === selectedCategory)
      );
  }, []);

  return (
    <div className="sidenav-container">
      {window.screen.width > 768 ? (
        <NavbarComponent
          vertical={true}
          navbar={false}
          data={categoryData}
          selectedCategory={selectedCategory}
        />
      ) : (
        <Navbar bg="light" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#"> {categoryData[0].name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="top"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavbarComponent
                    data={categoryData}
                    selectedCategory={selectedCategory}
                  />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default withRouter(SideNav);
