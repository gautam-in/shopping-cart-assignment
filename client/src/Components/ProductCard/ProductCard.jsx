import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { add } from "../../redux/CartSlice";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (payload) => {
    dispatch(add(payload));
    const toastConfig = {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    };
    toast.success("Product added to cart", toastConfig);
  };
  return (
    <li className={styles.productTile}>
      <h2 className={styles.productTitle}>{product?.name}</h2>
      <div className={styles.productDetails}>
        <img
          className={styles.productImage}
          src={product?.imageURL}
          alt={product.name || "product"}
        />
        <div className={styles.productDescriptionBox}>
          <div className={styles.productDescription}>
            {product?.description}
          </div>
          <div className={styles.ctaContainer}>
            <span className={styles.mrp}>MRP Rs {product?.price}</span>
            <button
              onClick={() =>
                handleAddToCart({
                  id: product.id,
                  details: product,
                  quantity: 1,
                })
              }
              className={styles.productCta}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default ProductCard;
