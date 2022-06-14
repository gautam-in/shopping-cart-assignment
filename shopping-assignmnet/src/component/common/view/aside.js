/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../../app/assets/css/aside.css";
const Aside = ({ categories }) => (
  <aside>
    <ul>
      {categories
        .sort((a, b) => parseInt(a.order) - parseInt(b.order))
        .map((category) => (
          <li key={category.key}>
            <Link to={`/product/${category.id}`}>{category.name}</Link>
          </li>
        ))}
    </ul>
  </aside>
);
export default Aside;

Aside.PropTypes = {
  categories: PropTypes.objectOf(PropTypes.any).isRequired,
};
