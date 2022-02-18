import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({
  title,
  subtitle,
  imageUrl,
  imagePosition,
  linkUrl,
  history,
  match,
}) => (
  <div
    className={`menu-item ${imagePosition}`}
    // onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div className={`category-image`} >
      <img
      
       src={imageUrl} alt={` ${title}`}></img>
    </div>

    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">{subtitle}</span>
      <span className="shop-now" onClick={() => history.push(`/products`)}
      >Explore</span>
    </div>
  </div>
);
export default withRouter(MenuItem);
