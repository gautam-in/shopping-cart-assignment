import React from "react";
import Button from "../common/button";
import Image from "../common/image";

import "./index.scss";

import { addToCartLabel, mrpLabel, ruppeeLabel } from "../../constant";

const Product = ({ product, handlecart }) => {
  const handleBuy = () => {
    handlecart(product);
  };

  const returnButton = (ctaLabel, type) => {
    return (
      <Button
        className={`add_to_cart ${type}`}
        variant="primary"
        onClick={handleBuy}
      >
        {ctaLabel}
      </Button>
    );
  };

  const returnDescription = (description) => {
    let descriptionData = description;
    if (descriptionData && descriptionData.length > 175) {
      descriptionData = descriptionData.substr(0, 175);
      descriptionData = descriptionData.substr(
        0,
        Math.min(descriptionData.length, descriptionData.lastIndexOf(" "))
      );
      descriptionData = `${descriptionData} ...`;
    }
    return (
      <div className="description">
        <div className="text-clamp-3" title={description}>
          {descriptionData}
        </div>
      </div>
    );
  };

  const returnPrice = (price) => {
    return <div className="price">{`${mrpLabel} ${ruppeeLabel}${price}`}</div>;
  };

  return (
    <div className="card_container">
      <div className="card_header">
        <h4 className="title">{product.name}</h4>
      </div>
      <div className="card_body">
        <div className="image_container">
          <Image
            imgClassName="img-fluid"
            src_2x={product.imageURL}
            src={product.imageURL}
            alt={product.name}
          />
        </div>
        {returnDescription(product.description)}
        {
          <div className="tablet_info_container">
            {returnDescription(product.description)}
          </div>
        }
        {
          <div className="mobile_info_container">
            {returnDescription(product.description)}
            {returnButton(
              `${addToCartLabel} @ ${mrpLabel} ${ruppeeLabel}${product.price}`,
              "mobile"
            )}
          </div>
        }
      </div>
      {returnButton(
        `${addToCartLabel} @ ${mrpLabel} ${ruppeeLabel}${product.price}`,
        "tablet"
      )}
      {
        <div className="card-footer">
          {returnPrice(product.price)}
          {returnButton(addToCartLabel, "desktop")}
        </div>
      }
    </div>
  );
};

export default Product;
