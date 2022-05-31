import React from "react";

import { NavLink } from "react-router-dom";

import "./categories.css";

function Category({
  categoryname,
  description,
  imageUrl,
  keyname,
  id,
  counter,
}) {
  return (
    <section
      className={
        counter % 2 === 0 ? "categories" : "categories categories-reverse"
      }
    >
      <img
        data-src={imageUrl}
        alt="offers"
        className="lazyload"
        width={535}
        height={256}
      />

      <div className="cat-info">
        <div
          className={
            counter % 2 === 0
              ? "cat-info-contents"
              : "categories-contents-reverse "
          }
        >
          <h3>{categoryname}</h3>
          <p>{description}</p>
          <NavLink to={"/Products/" + id}> {"Explore " + keyname}</NavLink>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Category);
