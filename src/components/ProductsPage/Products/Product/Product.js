import React from "react";
import "./Product.scss";
import Button from "../../../UI/Button/Button";

function Product({ name, imageUrl, description, price, addProduct }) {
  return (
    <div className="product">
      <h2 className="product__name">{name}</h2>
      <div className="product__imageWithDescription">
        <div className="product__image">
          <picture>
            <source media="(max-width:1024px)" srcSet={imageUrl} />
            <source media="(max-width:732px)" srcSet={imageUrl} />
            <img src={imageUrl} alt={name} />
          </picture>
        </div>
        <div className="product__descriptionContainer">
          <p className="product__description">{description}</p>
        </div>
        <div className="product__descriptionContainer_mobileOnly">
          <p className="product__description">{description}</p>
          <div className="product__pricewithbtn_mobile">
            <Button
              styles={"product__button_mobile"}
              click={addProduct}
              ariaLabel={`Click to add ${name} into cart for price Rs ${price}`}
            >
              Buy Now@ {price}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__pricewithbtn_desktop">
        <div className="product__price">MRP Rs.{price}</div>
        <Button
          styles={"product__button"}
          click={addProduct}
          ariaLabel={`Click to add ${name} into cart`}
        >
          Buy Now
        </Button>
      </div>
      <div className="product__pricewithbtn_tablet">
        <Button
          styles={"product__button_tablet"}
          click={addProduct}
          ariaLabel={`Click to add ${name} into cart for price Rs ${price}`}
        >
          {"Buy Now@ Rs " + price}
        </Button>
      </div>
      <hr />
    </div>
  );
}

export default Product;
