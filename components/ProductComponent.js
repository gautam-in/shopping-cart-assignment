import {
  CategoryDrop,
  LeftNav,
  ProductsContainer,
} from "../styles/ProductsStyle";
import router, { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/Link";
import { fetchCategories } from "../Redux/actions/thunk";
import ProductListComponent from "./ProductListCompnent";
import ErrorComponent from "./ErrorComponent";

const ProductComponent = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categoryList);
  const { query } = useRouter() || { query: { categoryId: "All" } };
  const categoryId = query.categoryId;

  useEffect(() => {
    if (categoryList.length === 0) dispatch(fetchCategories());
  }, []);

  return (
    <>
      <ProductsContainer>
        {categoryList.length === 0 ? (
          <ErrorComponent errorMessage="Unable to fetch categories." />
        ) : (
          <>
            <CategoryDrop>
              <select
                value={categoryId || "All"}
                onChange={(e) => {
                  router.push(`/products/${e.target.value}`);
                }}
              >
                <option value="All">--ALL--</option>
                {categoryList
                  .filter((category) => category.enabled)
                  .map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </select>
            </CategoryDrop>
            <LeftNav>
              <ul>
                {categoryList
                  .filter((category) => category.enabled)
                  .map((category) => (
                    <li key={category.id}>
                      <Link href={"/products/" + category.id}>
                        {category.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </LeftNav>
          </>
        )}
        <ProductListComponent />
      </ProductsContainer>
    </>
  );
};

export default ProductComponent;
