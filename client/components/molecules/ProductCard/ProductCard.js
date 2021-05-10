import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import Toast from "../Toast/Toast";
import { addItem, fetchProducts } from "client/components/redux";
import { useDispatch } from "react-redux";

function ProductCard({ list }) {
  let { id, name, description, imageURL, price, stock } = list;

  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);
  return (
    <>
      <div className="product_area">
        <div className="product_name"> {name}</div>
        <img src={imageURL} alt={name} width="100%" height="auto" />
        <div className="product_desc">{description}</div>
        <div className="buy_button">
          <Button
            onClick={() => {
              setShowToast(true);
              dispatch(addItem(list));
            }}
          >
            Buy again now @Rs.{price}
          </Button>
          {/* <div className="noselect">Buy again now </div>
          <div className={"noselect"}>@Rs.{price}</div> */}
        </div>
      </div>

      {showToast && <Toast handleClose={setShowToast} />}
    </>
  );
}

export default ProductCard;
