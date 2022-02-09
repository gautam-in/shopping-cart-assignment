import React from "react";
import "./Card.scss";
function Card(props){
    return(
        <div className="card shadow-sm col-12">{props.children}</div>
    )
}
export default Card;