import {
  CategoryDDL,
  LeftNav,
  ProductsContainer,
} from "../styles/ProductsStyle";
import router, { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/Link";
import { fetchCategories } from "../Redux/actions/thunk";
import ProductList from "./ProductList";
import Error from "./Error";

const Product = () => {
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
          <Error errorMessage="Unable to fetch categories." />
        ) : (
          <>
            <CategoryDDL>
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
            </CategoryDDL>
            <LeftNav>
              <ul>
                {categoryList
                  .filter((category) => category.enabled)
                  .map((category) => (
                    <li key={category.id}>
                      <Link href={query.categoryId === category.id ? "/products" : "/products/" + category.id} className="ttt">
                        <a tabIndex="0" className={query.categoryId === category.id ? "active-link" : ""}>
                          {category.name}
                        </a>
                      </Link>
                    </li>
                  ))}
              </ul>
            </LeftNav>
          </>
        )}
        <ProductList />
      </ProductsContainer>
    </>
  );
};

export default Product;
