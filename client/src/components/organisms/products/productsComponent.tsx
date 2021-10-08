import { ProductsList } from "models/products";
import { ReactElement } from "react";
import "pages/products/products.scss";
import ProductCard from "components/molecules/productCard/productCard";

interface IProps {
  productsList: ProductsList["products"];
  addToCart: Function;
}

const ProductsComponent = (props: IProps): ReactElement => {
  const { productsList, addToCart } = props;

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
