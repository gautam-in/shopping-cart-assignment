import {ProductHeader,ProductStyles,ProductContent,ProductImage,ProductDesc,ProductFooter} from "../styles/ProductTileStyle";
import CustomButton from "../atom/CustomButton";
import { useDispatch } from "react-redux";
import { addToShipping } from "../../redux/actions";

export default function ProductContainer({ product }) {
  const dispatch = useDispatch();
  return (
    <ProductStyles>
      <ProductHeader>
        <h3>{product.name}</h3>
      </ProductHeader>
      <ProductContent>
        <ProductImage>
          <img src={product.imageURL} alt={product.name} />
        </ProductImage>
        <ProductDesc >
          <p>{product.description}</p>
        </ProductDesc>
        <ProductFooter>
          <div className="product-price">MRP Rs.{product.price}</div>
          <CustomButton
            text={`Buy Now`}
            additionalText={` @ Rs ${product.price}`}
            clickHandler={() => dispatch(addToShipping(product))}
          />
        </ProductFooter>
      </ProductContent>
    </ProductStyles>
  );
}
