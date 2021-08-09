import Button, { ButtonType } from "components/button/button";
import { ProductItem } from "models/products";
import { ReactElement } from "react";
import "./products.scss";

interface IProps {
  product: ProductItem;
  addToCart: Function;
}

const ProductCard = (props: IProps): ReactElement => {
  const { product, addToCart } = props;

  const productSelected = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <div className="product-image-div">
        <img src={product.imageURL} alt={product.name} />
      </div>
      <div className="product-description">
        <p>{product.description}</p>
      </div>
      <div className="price-and-purchase">
        <span>{`MRP Rs.${product.price}`}</span>
        <Button type={ButtonType.Secondary} id="buy-now" customClass="buy-now-button" onClick={() => productSelected()}>
          Buy Now
        </Button>
      </div>
      <hr style={{ borderTop: "dotted 1px", marginTop: "10px" }} />
    </div>
  );
};

export default ProductCard;
