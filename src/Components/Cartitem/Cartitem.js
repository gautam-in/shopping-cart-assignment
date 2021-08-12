import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import CloseIcon from "@material-ui/icons/Close";
import "./Cartitem.scss";
export default function Cartitem(props) {
  return (
    <div className="eachcartitem">
      <div>
        <img src={props.item.imageURL} />
      </div>
      <div className="productdetails">
        <h5>{props.item.name}</h5>
        <div className="itemcontainer">
          <div className="iconcontainer">
            <RemoveCircleIcon
              style={{ color: "#b81b23" }}
              onClick={() => props.removefromcart()}
            />
            {props.item.count}
            <AddCircleIcon
              style={{ color: "#b81b23" }}
              onClick={() => props.addtocart()}
            />
            <CloseIcon/>
            <span> Rs.{props.item.price}</span>
          </div>
          <div className="itemprice">Rs. {props.item.price * props.item.count}</div>
        </div>
      </div>
    </div>
  );
}
