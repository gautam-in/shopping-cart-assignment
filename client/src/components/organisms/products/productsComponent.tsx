import { ProductsList } from "models/products";
import { ReactElement } from "react";
import ProductCard from "components/molecules/productCard/productCard";
import "modules/products/products.scss";

interface IProps {
  productsList: ProductsList["products"];
}

const ProductsComponent = (props: IProps): ReactElement => {
  const { productsList } = props;

  return (
    <>
      {productsList && (
        <ul className="products-list">
          {productsList.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductsComponent;
