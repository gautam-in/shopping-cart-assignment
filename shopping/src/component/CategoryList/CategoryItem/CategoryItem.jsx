import React from "react";
import "./categoryItem.css";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../../component/Custom-Button/CustomButton";

const CategoryItem = ({ categoryItem }) => {
  let navigate = useNavigate();
  return (
    <div class="category-list-container border-shadow">
      {categoryItem.imageUrl ? (
        <div className="imgContainer">
          <img src={categoryItem.imageUrl} alt="" />{" "}
        </div>
      ) : null}

      <div>
        <h2>{categoryItem.name}</h2>
        <p className="content">{categoryItem.description}</p>
        <div className="buttonContainer">
          <CustomButton
            onClick={() =>
              navigate("/product", {
                state: categoryItem.id,
              })
            }
          >
            Explore {categoryItem.key}
          </CustomButton>

          {/* <CustomButton type="button">Explore {categoryItem.key}</CustomButton> */}
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
