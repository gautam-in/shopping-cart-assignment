import React from "react";
import "./Category.scss";
export default function Category(props) {
  return (
    <div className="eachcategory">
      <img src={props.data.imageUrl} className="eachcategoryimg" />
      <div className="eachcategorysection">
        <h2>{props.data.name}</h2>
        <p>{props.data.description}</p>
        <button className="categorybutton">
          Explore {props.data.name}
        </button>
      </div>
    </div>
  );
};
