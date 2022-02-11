import React from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Nav } from 'react-bootstrap';
import './navbar.styles.scss';

const NavbarComponent = ({
  vertical,
  navbar,
  data,
  match,
  selectedCategory,
}) => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      {data.map((category) => (
        <Nav.Link
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
