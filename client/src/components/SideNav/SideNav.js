import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";

const SideNav = ({ filterProducts }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((categories) => setCategories(categories));
  }, []);

  return (
    <Nav className="flex-column bg-light h-100">
      {categories.map(
        (category) =>
          category.enabled && (
            <Nav.Link
              key={category.id}
              onClick={() => filterProducts(category.id)}
            >
              {category.name}
            </Nav.Link>
          )
      )}
    </Nav>
  );
};

export default SideNav;
