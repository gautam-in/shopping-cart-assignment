import styles from "./ProductsMap.module.scss";
import Button from "../../reusable_components/Button";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartReducer";
import Spinner from "../spinner/Spinner";

const ProductsMap = (props) => {
  const { products, isLoading, hasError } = props.products;
  const cartDispatch = useDispatch();

  const addItemHandler = (item) => {
    cartDispatch(cartActions.addItem(item));
  };
  const product = products.map((item) => {
    return (
      <article key={item.id} className={styles.product}>
        <h1 className={styles["product-name"]}>{item.name}</h1>
        <div className={styles["product-info-container"]}>
          <img
            className={styles["product-image"]}
            src={item.imageURL}
            alt={item.name}
          />
          <div className={styles["product-description-container"]}>
            <div className={styles["product-description-inner"]}>
              {item.description}
            </div>
          </div>
        </div>
        <Button
          onClick={addItemHandler.bind(null, item)}
          addClassName={styles["product-button-tablet"]}
        >{`Buy Now @ Rs.${item.price}`}</Button>
        <div className={styles["product-footer"]}>
          <div className={styles["price"]}>{`MRP RS.${item.price}`}</div>
          <Button
            addClassName={styles["product-button"]}
            onClick={addItemHandler.bind(null, item)}
          >
            Buy Now
          </Button>
        </div>
      </article>
    );
  });
  return (
    <section className={styles["product-list-container"]}>
      <div className={styles["product-list-inner"]}>
        {isLoading && <Spinner />}
        {product}
        {hasError && <div className={styles.error}>Something went wrong</div>}
      </div>
    </section>
  );
};

export default ProductsMap;
