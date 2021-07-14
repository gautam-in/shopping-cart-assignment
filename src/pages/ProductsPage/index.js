import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useViewport } from "../../hooks/useDevice";

const Dropdown = React.lazy(() =>
  import(
    /* webpackChunkName: "SiderbarDropdownComponent" */ "../../components/Dropdown"
  )
);
const ProductCard = React.lazy(() =>
  import(
    /* webpackChunkName: "ProductPageProductCardComponent" */ "../../components/ProductCard"
  )
);
const Sidebar = React.lazy(() =>
  import(
    /* webpackChunkName: "ProductCardSidebarComponent" */ "../../components/Sidebar"
  )
);

import { getCategoryList } from "../../redux/actions/categoryListActions";
import { getProductList } from "../../redux/actions/productListActions";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const { isMobile } = useViewport();
  const categoryList = useSelector((state) => state.category.categoryList);
  const productList = useSelector((state) => state.product.productList);
  const [selectedCategory, setSelectedCategory] = useState(
    `${params["id"] ? `${params["id"]}` : ``}`
  );
  useEffect(() => {
    dispatch(getCategoryList());
    dispatch(getProductList());
  }, [dispatch]);
  const changeHandlerDropdown = (e) => {
    const { selectedIndex, value } = e.target;
    setSelectedCategory(value);
    history.push(
      `${
        selectedIndex
          ? `/products/${
              _.sortBy(categoryList, ["order"])[e.target.selectedIndex].id
            }`
          : `/products`
      }`
    );
  };
  const changeHandlerSiderbar = (value) => {
    setSelectedCategory(value);
  };
  return (
    <section className="products-section">
      {isMobile ? (
        <Dropdown
          changeHandler={changeHandlerDropdown}
          options={_.sortBy(categoryList, ["order"]).filter(
            (category) => category.enabled
          )}
          value={selectedCategory}
        />
      ) : null}
      {!isMobile ? (
        <Sidebar
          categories={_.sortBy(categoryList, ["order"]).filter(
            (category) => category.enabled
          )}
          changeHandler={changeHandlerSiderbar}
          selectedCategory={selectedCategory}
        />
      ) : null}
      <div className="products-section__products">
        {params["id"]
          ? _.filter(productList, { category: params["id"] }).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : productList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </section>
  );
};

export default ProductsPage;
