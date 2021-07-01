import React from "react";
import styled from "styled-components";
import "./Eachproduct.scss";
function Eachproduct(props) {
  const Container = styled.div`
    background-image: url(${props.product.imageURL});
    background-repeat: no-repeat;
    height: 200px;
    background-size: cover;
    @media (max-width: 600px) {
      height: 300px;
    }
  `;

  return (
    <div className="Eachproduct">
      <div className="eachtitle">
        <strong>{props.product.name}</strong>
      </div>
      <Container></Container>
      <div className="description">{props.product.description}</div>
      <div className="Eachproductpricing">
        <span>MRP Rs.{props.product.price}</span>
        <button
          onClick={() => {
            console.log("qaa");
            props.addtocart();
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Eachproduct;
