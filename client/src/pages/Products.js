import React from "react";

import "./products.css";

import Product from "../components/Product";
import { NavLink } from "react-router-dom";

function Products() {
  return (
    <article className="productpage-container">
      <section className="menu-section">
        <nav>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Home">Home</NavLink>
        </nav>
      </section>
      <section className="porduct-listing">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </section>
    </article>
  );
}

export default Products;
