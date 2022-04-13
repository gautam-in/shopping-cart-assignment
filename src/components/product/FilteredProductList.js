import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductsMap from "./ProductsMap";
import styles from "./FilteredProductList.module.scss";

const FilteredProductList = () => {
  const { products, ...restItems } = useSelector((state) => state.products);
  const { categoryId } = useParams();

  const isProductExisting = products.some(
    (item) => item.category === categoryId
  );

  const filteredProductItems = products.filter((item) => {
    return item.category === categoryId;
  });

  return (
    <Fragment>
      {isProductExisting && (
        <ProductsMap
          products={{ products: filteredProductItems, ...restItems }}
        />
      )}
      {!isProductExisting && (
        <div className={styles.error}>No products have found</div>
      )}
    </Fragment>
  );
};

export default FilteredProductList;
