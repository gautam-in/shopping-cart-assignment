import { ProductsList } from "models/products";
import { useEffect } from "react";
import { ReactElement } from "react";
import "./products.scss";
import ProductCard from "./productCard";

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
