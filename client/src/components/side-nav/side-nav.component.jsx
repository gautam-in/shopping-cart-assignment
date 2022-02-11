import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, NavbarToggler, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import NavbarComponent from '../navbar/navbar.component';
import CATEGORY_DATA from '../../server/categories/index.get.json';
import './side-nav.styles.scss';

const SideNav = ({ match, selectedCategory }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [categoryData, setCategoryData] = useState(CATEGORY_DATA);

  useEffect(() => {
    if (selectedCategory)
      setCategoryData(
        CATEGORY_DATA.filter((category) => category.id === selectedCategory)
      );
  }, []);

  const toggleNavbar = () => setCollapsed(!collapsed);
  console.log(selectedCategory);
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
        <Navbar color="faded" light>
          <Navbar.Toggle
            onClick={() => selectedCategory === undefined && toggleNavbar()}
          >
            {categoryData[0].name}
            {selectedCategory === undefined && (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse isOpen={collapsed} navbar>
            <NavbarComponent
              vertical={false}
              navbar={true}
              data={categoryData}
              selectedCategory={selectedCategory}
            />
          </Navbar.Collapse>
        </Navbar>
      )}
    </div>
  );
};

export default withRouter(SideNav);
