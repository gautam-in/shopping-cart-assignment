import React from "react";

function ItemImage({imageURL}){
return(
    <div className="icon">
        {" "}
        <img src={imageURL} alt="" />{" "}
      </div>
)
}
export default ItemImage;