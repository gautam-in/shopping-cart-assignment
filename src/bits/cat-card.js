import React from "react";
import { withRouter } from "react-router-dom";
import "./styles/hItem.css";

const MenuItem = ({ id, name, description, imageUrl }) => {
  return (
    <div className="menu-cart-item">
      <img src={imageUrl} alt="item" />
      <div className="menu-item-details">
        <strong className="name">{name}</strong>
        <p>{description}</p>
        <buton className="button-explore" type="button">
          Explore bakery-cakes-dairy
        </buton>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
