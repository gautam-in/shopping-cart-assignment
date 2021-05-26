import React, { useContext, useState } from "react";
import Button from "../../atoms/Button/Button";
import Toast from "../Toast/Toast";
import { addItem } from "../../../components/redux";
import { useDispatch } from "react-redux";
import { DeviceContext } from "../../../App";
import { postAddToCart } from "../../pages/services";

function ProductCard({ list }) {
  const { isMobile, isDesktop } = useContext(DeviceContext);
  let { id, name, description, imageURL, price, stock } = list;

  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const addToCart = (list) => {
    postAddToCart(list.id)
      .then((data) => {
        setShowToast(true);
        dispatch(addItem(list));
        console.log("add succed", data);
      })
      .catch((err) => {
        console.log("ERROR detected adding cart", err);
      });
  };

  return (
    <>
      <div className="product_area">
        <div className="product_name"> {name}</div>
        <img src={imageURL} alt={name} width="100%" height="auto" />
        <div className="product_desc" title={description}>
          {<div className={isMobile ? null : "line_clamp"}>{description}</div>}
        </div>
        <div className="flexed buy_button not_desktop_buy">
          <Button
            onClick={() => {
              addToCart(list);
            }}
          >
            Buy Now @Rs.{price}
          </Button>
        </div>
        <div className="flexed_ai_center buy_button desktop_buy">
          <div className="noselect">MRP Rs.{price}</div>
          <Button
            onClick={() => {
              addToCart(list);
            }}
          >
            Buy now
          </Button>
        </div>
      </div>

      {showToast && <Toast handleClose={setShowToast} />}
    </>
  );
}

export default ProductCard;
