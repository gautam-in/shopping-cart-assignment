/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";

import { useHistory } from "react-router-dom";
import Button from "../ButtonPrimary/ButtonPrimary";

import "./Categories.scss";

export default (props) => {
  const history = useHistory();
  const { data, flip, setSelected } = props;
  const { imageUrl = "/images/no_image.png", description, name, id } = data;

  const handleClick = () => {
    setSelected(id);
    history.push("/product");
  };

  return (
    <section className={`section-categories shadow1`}>
      <div className={`categories-container ${flip ? "row-reverse" : ""}`}>
        <div className="img-container">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="category-details">
          <div className="cate-name flex-center">{name}</div>
          <div className="cate-dis flex-center pad-t-b-10">{description} </div>
          <div className="btn flex-center">
            <Button click={handleClick} title={`Explore ${name}`} />
          </div>
        </div>
      </div>
    </section>
  );
};
