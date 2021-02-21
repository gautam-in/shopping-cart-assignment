import React from "react";
import Button from "../Button/Button";

import Classes from "./Card.css";

const Card = ({ data, addToCartHandler }) => {
  let path = `../..${data.imageURL}`;
  let price = `MRP Rs.${data.price}`;
  let priceMT = `Buy Now @ Rs.${data.price}`;

  return (
    <div className={Classes.CardWrapper}>
      <div className={Classes.CardHeader}>{data.name}</div>
      <div className={Classes.ImgDescWrap}>
        <div className={Classes.CardImgWrapper}>
          <img src={`${path}`} alt={data.name} className={Classes.CardImg} />
        </div>
        <p className={Classes.DescriptionWrapper}>{data.description}</p>
      </div>
      <div className={Classes.PriceDesktop}>
        <div className={Classes.PriceWrapper}>{price}</div>
        <Button
          CustomBtn={Classes.CustomBtn}
          clicked={() => addToCartHandler(data, "add")}
        >
          Buy Now
        </Button>
      </div>

      <div className={Classes.PriceTab}>
        <Button
          CustomBtn={Classes.CustomBtnTab}
          clicked={() => addToCartHandler(data, "add")}
        >
          {priceMT}
        </Button>
      </div>
    </div>
  );
};
export default Card;
