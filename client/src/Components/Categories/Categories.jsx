import React from "react";

import Button from "Components/ButtonPrimary/ButtonPrimary";

import "./Categories.scss";

export default (props) => {
  const { data, flip } = props;
  const { imageUrl, description, name } = data;
  return (
    <section className={`section-categories shadow `}>
      <div className={`categories-container ${flip ? "row-reverse" : ""}`}>
        <div className="img-container">
          <img src={data.imageUrl} alt={name} />
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
