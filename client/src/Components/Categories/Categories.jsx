import React from "react";

import Button from "Components/ButtonPrimary/ButtonPrimary";

import "./Categories.scss";

export default (props) => {
  const { data, flip } = props;
  const { imageUrl = "/images/no_image.png", description, name } = data;

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
            <Button title={`Explore ${name}`} />
          </div>
        </div>
      </div>
    </section>
  );
};
