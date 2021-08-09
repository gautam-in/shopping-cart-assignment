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
      <div className="product-details">
        <img src={product.imageURL} alt={product.name} />
        <p>{product.description}</p>
      </div>
      <div className="price-and-purchase">
        <span className="product-mrp">{`MRP Rs.${product.price}`}</span>
        <Button type={ButtonType.Secondary} id="buy-now" customClass="buy-now-button" onClick={() => productSelected()}>
          Buy Now <span className="product-price">{`@${product.price}`}</span>
        </Button>
      </div>
      <hr style={{ borderTop: "dashed 1px #eee", marginTop: "10px" }} />
    </div>
  );
};

export default ProductCard;
