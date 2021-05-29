import React, { useState } from "react";
import "./Product.scss";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import * as AuthenticateAPI from "../../axios/AuthenticationAPI";
import ProductCard from "../../components/ProductCard/ProductCard";
import { withRouter } from "react-router";
import Dropdown from "../../components/UI/Dropdown/Dropdown";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function Product(props) {
  const { categories } = props;
  const initialCategory = props.history.location.data
    ? props.history.location.data
    : null;
  const [productCategory, setProductCategory] = useState(initialCategory);
  const [productItems, setProductItems] = useState([]);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [isMobile, setMobileBoolean] = useState(windowDimensions.width < 600);

  React.useEffect(async () => {
    await AuthenticateAPI.getData(`${process.env.REACT_APP_BASE_URL}/products`)
      .then((res) => setProductItems(res))
      .catch((err) => console.log(err));
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
    <main className="productContainer">
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
          return <ProductCard product={product} key={product.id} />;
        })}
      </section>
    </main>
  );
}
export default withRouter(Product);
