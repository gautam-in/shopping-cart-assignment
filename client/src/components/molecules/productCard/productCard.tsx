import Button, { ButtonType } from "components/atoms/button/button";
import { ProductItem } from "models/products";
import { allRoutes } from "navigation/allRouteNames";
import { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { LocalStorage } from "services/storage";
import { useDispatch } from "react-redux";
import { CartActions } from "modules/cart/redux/actions/actions";
import "modules/products/products.scss";

interface IProps {
  product: ProductItem;
}

const ProductCard = (props: IProps): ReactElement => {
  const { product } = props;
  const dispatch = useDispatch();
  let history = useHistory();
  let userStatus = LocalStorage.getStorage("status");

  const productSelected = () => {
    if (userStatus) dispatch(CartActions.addToCart(product));
    else {
      history.push(allRoutes.LOGIN);
    }
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
