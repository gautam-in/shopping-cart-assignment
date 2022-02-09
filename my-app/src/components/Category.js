import React from "react";
import { useNavigate } from "react-router-dom";

function Category(props) {
    let navigate = useNavigate();
    return (
        <div className="row col-12 m-0">
            <div className="col-4 p-0">
                <img src={props.cat.imageUrl} alt={props.cat.name} width="100%"/>
            </div>
            <div className="col-8">
                <h3>{props.cat.name}</h3>
                <p>{props.cat.description}</p>
                <button className="btn btn-danger"onClick={()=>{navigate("/products")}}>Explore {props.cat.key}</button>
            </div>
        </div>
    )
}
export default Category;