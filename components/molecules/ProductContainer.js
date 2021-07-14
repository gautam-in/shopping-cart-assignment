import {
  ProductHeader,
  ProductStyles,
  ProductContent,
  ProductImage,
  ProductDesc,
  ProductFooter,
} from "../styles/ProductTileStyle";
import CustomButton from "../atom/CustomButton";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { POST } from "../../Utils/helper";
import { ADD_TO_SHIPPING } from "../../context/actions/Constant";
import Image from "next/image";
export default function ProductContainer({ product }) {
  const { dispatch } = useContext(CartContext);
  const addToCart = async (product) => {
    const data = await POST("addToCart", product.id);
    if (data) {
      dispatch({ type: ADD_TO_SHIPPING, payload: product });
    }
  };
  return (
    <ProductStyles>
      <ProductHeader>
        <p>{product.name}</p>
      </ProductHeader>
      <ProductContent>
        <ProductImage>
          <Image
            src={product.imageURL}
            width={185}
            height={185}
            alt={product.name}
          />
        </ProductImage>
        <ProductDesc>
          <p>{product.description}</p>
        </ProductDesc>
        <ProductFooter>
          <div className="product-price">
            <span>MRP Rs.{product.price}</span>
          </div>
          <CustomButton
            additionalText={` @ Rs ${product.price}`}
            clickHandler={() => addToCart(product)}
          >
            Buy Now
          </CustomButton>
        </ProductFooter>
      </ProductContent>
    </ProductStyles>
  );
}
