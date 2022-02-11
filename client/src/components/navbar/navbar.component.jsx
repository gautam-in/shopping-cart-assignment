import React from 'react';

import { withRouter } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import './navbar.styles.scss';

const NavbarComponent = ({ data, match, selectedCategory }) => {
  console.log(
    data.filter((category) => category.name !== selectedCategory),
    selectedCategory
  );
  return (
    <Nav defaultActiveKey="/" className="flex-column">
      {data
        .filter((category) => category.name !== selectedCategory)
        .map((category) => (
          <Nav.Link
            key={category.name}
            href={`${match.url}/${category.id}`}
            disabled={selectedCategory !== undefined}
          >
            {category.name}
          </Nav.Link>
        ))}
    </Nav>
  );
};

export default withRouter(NavbarComponent);
