import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../../global.styles";
import { setProductsCategory } from "../../redux/products/products.action";
import { Category } from "./homeCategory.styles";
const HomeCategory = ({ category, index }) => {
  const dispatch = useDispatch();
  return (
    <Category index={index}>
      <div className="image">
        <img src={category.imageUrl} width={300} />
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 8 }}>{category.name}</h1>
        <p>{category.description}</p>
        <Link to="/products">
          <Button
            onClick={() => {
              dispatch(setProductsCategory(category.id));
            }}
          >{`Explote ${category.key}`}</Button>
        </Link>
      </div>
    </Category>
  );
};

export default HomeCategory;
