import { FunctionComponent, useContext } from "react";

import Button from "../Common/Button";
import "./styles.scss";
import { CartContext } from "../../context/CartContext";
import { CartActionTypes } from "../../types";

type ProductCardProps = {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
};

const ProductCard: FunctionComponent<ProductCardProps> = (product) => {
  const { id, name, imageUrl, description, price } = product;

  const { dispatch } = useContext(CartContext);

  return (
    <div className="product-card">
      <h3 className="product-card__title" id={`product-title-${id}`}>
        {name}
      </h3>

      <div className="product-card__wrapper">
        <picture className="product-card__wrapper-picture">
          <img src={imageUrl} alt={name} />
        </picture>

        <p className="product-card__wrapper-description">
          <>
            {description.substring(0, 150)}
            {description.length > 150 && "..."}
          </>
        </p>

        <div className="product-card__wrapper-actions">
          <span className="product-card__wrapper-price hidden@tablet hidden@mobile">
            MRP Rs. {price}
          </span>

          <Button
            type="button"
            variant="primary"
            aria-labelledby={`product-title-${id}`}
            onClick={() =>
              dispatch({
                type: CartActionTypes.ADD_ITEM,
                payload: product,
              })
            }
          >
            <span className="hidden@desktop">Buy Now @ Rs.{price}</span>
            <span className="hidden@mobile hidden@tablet">Buy Now</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
