import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setProductsCategory } from "../../redux/products/products.action";
import styled from "styled-components";

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

const Category = styled.div`
  padding: 40px 0;
  box-shadow: 0 20px 30px -30px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: ${(props) => (props.index % 2 ? "row-reverse" : "row")};
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  color: #fff;
  font-weight: 700;
  background-color: #d00256;
  padding: 12px;
`;


export default HomeCategory;
