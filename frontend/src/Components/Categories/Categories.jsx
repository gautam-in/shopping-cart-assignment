import React from "react";

import { useHistory } from "react-router-dom";
import Button from "../../Components/ButtonPrimary/ButtonPrimary";

import "./Categories.scss";

const Categories = (props) => {
  const history = useHistory();
  const { data, flip, setSelected } = props;
  const { imageUrl = "/images/no_image.png", description, name, id } = data;

  const handleClick = () => {
    setSelected(id);
    history.push("/product");
  };

  return (
    <section className={`categories-section-wise shadow`}>
      <div className={`categories-container ${flip ? "row-reverse" : ""}`}>
        <div className="category-image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="category-details">
          <div className="category-label flex-center">{name}</div>
          <div className="category-description flex-center pad-t-b-10">{description} </div>
          <div className="category-btn flex-center">
            <Button click={handleClick} title={`Explore ${name}`} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Categories;
