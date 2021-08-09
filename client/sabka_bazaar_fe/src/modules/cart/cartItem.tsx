import Button, { ButtonType } from "components/button/button";
import { ProductItem } from "models/products";
import { ReactElement } from "react";
import "./cart.scss";

interface IProps {
  product: ProductItem;
  addToCart: Function;
  decrementProduct: Function;
}

const CartItem = (props: IProps): ReactElement => {
  const { product, addToCart, decrementProduct } = props;

  const handleAdd = () => {
    addToCart(product);
  };

  const handleRemove = () => {
    decrementProduct(product);
  };

  return (
    <div className="cart-item">
      <div className="product-image">
        <img src={product.imageURL} alt={product.name} />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <Button type={ButtonType.Secondary} customClass="count-button" id="product-count" onClick={() => handleRemove()}>
          -
        </Button>
        <span className="products-number">{product.productCount}</span>
        <Button type={ButtonType.Secondary} customClass="count-button" id="product-count" onClick={() => handleAdd()}>
          +
        </Button>
        &nbsp;
        <span className="multiply-product">{`x Rs.${product.price}`}</span>
        <span className="price-of-product">{`Rs.${product.price * product.productCount}`}</span>
      </div>
    </div>
  );
};

export default CartItem;
