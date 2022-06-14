import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const SingleCategory = ({ id, imageUrl, name, description }) => (
  <div className="categories__item" key={id}>
    <div>
      <img src={process.env.PUBLIC_URL + imageUrl} alt={name} />
    </div>
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <Link to={`/product/${id}`}>
        <button type="button" className="btn">
          Explore {name}
        </button>
      </Link>
    </div>
  </div>
);

SingleCategory.propTypes = {
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.description,
};
