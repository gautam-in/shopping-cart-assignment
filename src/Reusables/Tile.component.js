import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { increament } from "../store/action.js";

import "../Scss/tile.scss";

function Tile({ details }) {
    const dispatch = useDispatch();
    const handleCart = useCallback(()=>{
        dispatch(increament(details));
    },[dispatch,details])

    return (
        <li className="tile-cards" id={details.category}>
            <h2 className="tile-name truncate">{details.name}</h2>
            <img src={details.imageURL} alt={details.name} className="tile-img" />
            <p className="tile-desc">{details.description}</p>
            <button className="btn-cta-mob title-mob" onClick={handleCart}>
                Buy Now @ Rs. {details.price}
            </button>
            <div className="tile-cta-container">
                <span className="tile-price">MRP Rs. {details.price}</span>
                <button onClick={handleCart} className="btn-cta">
                    Buy Now
                </button>
            </div>
        </li>
    );
}

export default Tile;