import React, { useState } from "react";
import "./Product.scss";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import ProductCardMobile from "../../components/ProductCard/ProductCardMobile/ProductCardMobile";
import { withRouter } from "react-router";
import Dropdown from "../../components/UI/Dropdown/Dropdown";
import { getProductsAction } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function Product(props) {
  const { categories } = props;
  const dispatch = useDispatch();
  const productItems = useSelector((state) => state.products);
  const initialCategory = props.history.location.data
    ? props.history.location.data
    : null;
  const [productCategory, setProductCategory] = useState(initialCategory);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  React.useEffect(async () => {
    await dispatch(getProductsAction());
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const FilterProducts = productItems.filter((item) =>
    productCategory ? productCategory === item.category : true
  );
  return (
    <main className="productContainer" data-test="component-product">
      {windowDimensions.width >= 600 && (
        <Sidebar
          categories={categories}
          productCategory={productCategory}
          setProductCategory={setProductCategory}
        />
      )}

      {windowDimensions.width < 600 && (
        <Dropdown
          categories={categories}
          setProductCategory={setProductCategory}
          productCategory={productCategory}
        />
      )}

      <section className="productItemContainer">
        {FilterProducts.map((product) => {
          return <ProductCardMobile product={product} key={product.id} />;
        })}
      </section>
    </main>
  );
}
export default withRouter(Product);
