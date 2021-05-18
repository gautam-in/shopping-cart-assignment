import React from "react";
import Button from "../common/button";
import Image from "../common/image";

import useDevice from "../../utils/customHooks/useDevices";

import "./index.scss";

import { addToCartLabel, priceLabel } from "../../constant";

const Product = ({ product, handlecart }) => {
  const { isMobile, isTablet, isDesktop } = useDevice();
  const handleBuy = () => {
    handlecart(product);
  };

  const returnButton = (ctaLabel) => {
    return (
      <Button className="add_to_cart" variant="primary" onClick={handleBuy}>
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
    return <div className="price">{`${priceLabel}${price}`}</div>;
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
        {isDesktop && returnDescription(product.description)}
        {isTablet && (
          <div className="tablet_info_container">
            {returnDescription(product.description)}
          </div>
        )}
        {isMobile && (
          <div className="mobile_info_container">
            {returnDescription(product.description)}
            {returnButton(`${addToCartLabel} @ ${priceLabel}${product.price}`)}
          </div>
        )}
      </div>
      {isTablet &&
        returnButton(`${addToCartLabel} @ ${priceLabel}${product.price}`)}
      {isDesktop && (
        <div className="card-footer">
          {returnPrice(product.price)}
          {returnButton(addToCartLabel)}
        </div>
      )}
    </div>
  );
};

export default Product;
