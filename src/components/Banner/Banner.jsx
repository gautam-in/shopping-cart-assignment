import React from "react";
import "../Banner/Banner.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Banner = ({ category }) => {
  const navigate = useNavigate();
  const handleCLick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      <div id="myBox" className="banner-container" key={category.key}>
        <div className="banner-image-box">
          <img className="banner-image" src={category.imageUrl} alt="banner" />
        </div>
        <div className="banner-content-box">
          <div className="banner-content-heading">{category.name}</div>
          <div className="banner-contnent-description">
            {category.description}
          </div>
          <div className="banner-contnent-button">
            <Button type="xl" onClick={() => handleCLick(category.id)}>
              Explore {category.key}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
