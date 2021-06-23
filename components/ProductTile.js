import ProductTileStyles from "./styles/ProductTileStyle";
import CustomButton from "./CustomButton";
import { useDispatch } from "react-redux";
import { addToShipping } from "../actions";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  return (
    <ProductTileStyles>
      <div className="product-header">
        <h3>{product.name}</h3>
      </div>
      <div className="product-content">
        <div className="image-container">
          <img src={product.imageURL} alt={product.name} />
        </div>
        <div className="product-desc" title={product.description}>
         <p>{product.description}</p>
        </div>
        <div className="product-footer">
          <div className="product-price">MRP Rs.{product.price}</div>
          <CustomButton
            text={`Buy Now`}
            additionalText={` @ Rs ${product.price}`}
            clickHandler={() => dispatch(addToShipping(product))}
          />
        </div>
      </div>
    </ProductTileStyles>
  );
}
