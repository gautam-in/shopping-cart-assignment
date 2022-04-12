import Wrapper from "../wrapper/Wrapper";
import styles from "./Products.module.scss";
import ProductCategoryList from "./ProductCategoryList";
import ProductsRouter from "./ProductsRouter";
import CategoryDropdown from "./CategoryDropdown";

const Products = () => {
  return (
    <Wrapper>
      <div className={styles["products-container"]}>
        <ProductCategoryList />
        <CategoryDropdown />
        <ProductsRouter />
      </div>
    </Wrapper>
  );
};
export default Products;
