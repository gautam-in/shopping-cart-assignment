import React from "react";
import "./Eachcategory.scss";
import { Container } from "./Eachcategorystyles.js";
function Eachcategory(props) {
  console.log(props.reverse);
  return (
    <Container className="eachcategory" reverse={props.reverse}>
      <img src={props.data.imageUrl} className="eachcategoryimg" />
      <div className="eachcategorysection">
        <h2>{props.data.name}</h2>
        <p>{props.data.description}</p>
        <button className="eachcategorybutton">
          Explore {props.data.name}
        </button>
      </div>
    </Container>
  );
}

export default Eachcategory;
