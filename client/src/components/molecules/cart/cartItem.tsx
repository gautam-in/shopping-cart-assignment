import Button, { ButtonType } from "components/atoms/button/button";
import { ProductItem } from "models/products";
import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { CartActions } from "modules/cart/redux/actions/actions";
import "modules/cart/cart.scss";
import Image from "components/atoms/image/image";

interface IProps {
  product: ProductItem;
}

const CartItem = (props: IProps): ReactElement => {
  const { product } = props;
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(CartActions.addToCart(product));
  };

  const handleRemove = () => {
    dispatch(CartActions.decrementProduct(product));
  };

  return (
    <div className="cart-item">
      <div className="product-image">
        <Image src={product.imageURL} alt={product.name} />
      </div>
      <div className="item-details">
        <h2>{product.name}</h2>
        <Button type={ButtonType.Secondary} customClass="count-button" id="decrease-product-count" onClick={() => handleRemove()}>
          -
        </Button>
        <span className="products-number">{product.productCount}</span>
        <Button type={ButtonType.Secondary} customClass="count-button" id="oncrease-product-count" onClick={() => handleAdd()}>
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
