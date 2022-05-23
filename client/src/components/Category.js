import React from "react";

import { NavLink } from "react-router-dom";

import "./categories.css";

function Category({ categoryname, description, imageUrl, keyname, id }) {
  return (
    <section className="categories">
      <img src={imageUrl} alt="offers" />

      <div className="cat-info">
        <div className="cat-info-contents">
          <h3>{categoryname}</h3>
          <p>{description}</p>
          <NavLink to={"/Products/" + id}> {"Explore " + keyname}</NavLink>
        </div>
      </div>
    </section>
  );
}

export default Category;
