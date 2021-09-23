import { ProductsList } from "models/products";
import { ReactElement } from "react";
import "pages/products/products.scss";
import ProductCard from "../../molecules/products/productCard";

interface IProps {
  productsList: ProductsList["products"];
  addToCart: Function;
}

const ProductsComponent = (props: IProps): ReactElement => {
  const { productsList, addToCart } = props;
  console.log("Products", productsList);
  return (
    <>
      {productsList && (
        <ul className="products-list">
          {productsList.map((product) => (
            <ProductCard key={product.name} product={product} addToCart={addToCart} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductsComponent;
