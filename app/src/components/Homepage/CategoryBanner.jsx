import React from "react";
import styled from "styled-components";

const CategoryStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.index % 2 === 0 ? "row-reverse" : "row")};
  width: 100%;
  min-height: 150px;
  padding: 1%;
  margin: 1%;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 0px;
  box-shadow: 0px 7px 10px -7px grey;

  img {
    width: 30%;
    height: 150px;
    flex-grow: 0;
  }
  div {
    width: 50%;
    text-align: center;
  }
  button {
    background-color: #d00256;
    border: #d00256;
    color: white;
    padding: 1%;
  }
  @media screen and (max-width: 480px) {
    div {
      width: 65%;
    }
    div h2 {
      font-size: 1.2rem;
      font-weight: 600;
    }
    img {
      width: 35%;
    }
  }
`;

export function CategoryBanner({ item, index }) {
  return (
    <CategoryStyle index={index}>
      <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <button>Explore {item.name}</button>
      </div>
      <img src={item.imageUrl} alt={item.name} />
    </CategoryStyle>
  );
}
