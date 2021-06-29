import React from "react";
import { useDispatch } from "react-redux";
import { useViewport } from "../../hooks/useDevice";

const Button = React.lazy(() =>
  import(/* webpackChunkName: "ProductCardButtonComponent" */ "../Button")
);
const Text = React.lazy(() =>
  import(/* webpackChunkName: "ProductCardTextComponent" */ "../Text")
);

import { addProductToCart } from "../../redux/actions/cartActions";

import "./style.scss";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const clickHandler = (product) => {
    dispatch(addProductToCart(product));
  };
  const { isMobile, isTablet, isDesktop } = useViewport();
  return (
    <div className="product" aria-label={product.name} tabIndex={0}>
      <div className="product__name">
        <Text>{product.name}</Text>
      </div>
      <div className="product__imageContainer">
        <div className="product__imageContainer__wrapper">
          <img
            className="product__imageContainer__wrapper__image"
            src={product.imageURL}
            alt={product.name}
          />
        </div>
        {isMobile || isTablet ? (
          <div className="product__imageContainer__mobileTabletLayout">
            <div className="product__imageContainer__mobileTabletLayout__description">
              <Text ariaLabel={product.description} tabIndex="0">
                {product.description}
              </Text>
            </div>
            {isMobile ? (
              <div className="product__imageContainer__mobileTabletLayout__buyNowContainer">
                <Button
                  ariaLabel={`Press enter to buy ${product.name} worth rupees ${product.price}}`}
                  onClick={() => clickHandler(product)}
                  role="button"
                  tabIndex={0}
                >
                  Buy Now{isMobile || isTablet ? ` @ Rs.${product.price}` : ``}
                </Button>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
      {isDesktop ? (
        <div className="product__description">
          <Text ariaLabel={product.description} tabIndex="0">
            {product.description}
          </Text>
        </div>
      ) : null}
      {!isMobile ? (
        <div className="product__buyNowContainer">
          {isDesktop ? <Text>MRP Rs.{product.price}</Text> : null}
          <Button
            ariaLabel={`Press enter to buy now ${product.name} worth rupees ${product.price}}`}
            onClick={() => clickHandler(product)}
          >
            Buy Now{isMobile || isTablet ? ` @ Rs.${product.price}` : ``}
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default ProductCard;
