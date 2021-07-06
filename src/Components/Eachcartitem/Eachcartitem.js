import React from "react";
import "./Eachcartitem.scss";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import CloseIcon from "@material-ui/icons/Close";
function Eachcartitem({ item, addtocart, removefromcart }) {
  console.log(item);
  return (
    <div className="eachcartitem">
      <div>
        <img src={item.imageURL} />
      </div>
      <div className="productdetails">
        <h5>{item.name}</h5>
        <div className="itemcontainer">
          <div className="iconcontainer">
            <RemoveCircleIcon
              style={{ color: "#b81b23" }}
              onClick={() => removefromcart()}
            />
            {item.count}
            <AddCircleIcon
              style={{ color: "#b81b23" }}
              onClick={() => addtocart()}
            />
            <CloseIcon />
            <span> Rs.{item.price}</span>
          </div>
          <div className="itemprice">Rs. {item.price * item.count}</div>
        </div>
      </div>
    </div>
  );
}
export default Eachcartitem;
