import React from "react";

import Button from "Components/ButtonPrimary/ButtonPrimary";

import "./Categories.scss";

export default (props) => {
  const { data, flip } = props;
  const { imageUrl, description, name } = data;
  console.log("category::Flip", name, flip);
  //   const data = {
  //     imageUrl: "/images/category/fruits.png",
  //     description:
  //       "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
  //     name: "Beverages",
  //   };
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
