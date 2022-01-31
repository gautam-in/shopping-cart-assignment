import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./styles.scss";

const Category = ({ item, index }) => {
  const { name, key, description, imageUrl, id } = item;
  let navigate = useNavigate();
  let navigationUri = `/products/${id}`;
  return item ? (
    <div className="category-wrapper">
      {index % 2 === 0 ? (
        <div className="image-content">
          <div className="image-wrapper">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="content-wrapper">
            <h3 className="bold">{name}</h3>
            <p className="description fontsize16 medium">{description}</p>
            <Button
              className="theme-col fontsize16 medium"
              type="text"
              id={id}
              onClick={() => navigate(navigationUri)}
            >
              {`Explore ${key}`}
            </Button>
          </div>
        </div>
      ) : (
        <div className="content-image">
          <div className="content-wrapper">
            <h3 className="bold">{name}</h3>
            <p className="description fontsize16 medium">{description}</p>
            <Button
              className="theme-col fontsize16 medium"
              type="text"
              id={id}
              onClick={() => navigate(navigationUri)}
            >
              {`Explore ${key}`}
            </Button>
          </div>
          <div className="image-wrapper">
            <img src={imageUrl} alt={name} />
          </div>
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};

export default Category;
