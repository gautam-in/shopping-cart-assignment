import React from "react";
import './Item.css';

const Item = ({imagesrc,imagetext}) => {
    
        return(
            <div className="container">
                <img className="d-block w-100" src={process.env.PUBLIC_URL + `${imagesrc}`} alt={imagetext}/>
            </div>
        )
}

export default Item;