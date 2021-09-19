import React, { useEffect, useState, lazy, Suspense } from "react";
import Axios from "axios";

import { useSelector } from "react-redux";
import { accessProductDataList } from "../../Redux/productListReducer";
import { useDispatch } from "react-redux";
import classes from "./ProductPage.module.scss";
import arrowUp from "../../assets/images/upArrow.svg";
import arrowDown from "../../assets/images/downArrow.svg";

const ProductCard = lazy(() =>
  import("../../components/ProductCard/ProductCard")
);
export default function ProductPage({ location }) {
  const dispatch = useDispatch();

  const categoriesList = useSelector(
    (state) => state.categoriesList.categoriesListData
  );
  const productListFromReducer = useSelector(
    (state) => state.productList.productListData
  );
  //filter function
  const filterProducts = (category, productList) => {
    const { id } = category;
    if (id === "all") return productList;
    console.log(productList, "product List");
    const newList = [];
    productList.forEach((product) => {
      if (product.category === id) newList.push(product);
    });

    return newList;
  };

  const [productData, setProductData] = useState([]);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const [productCategories, setProductCategories] = useState([
    {
      id: "all",
      name: "All Product",
    },
  ]);
  const [selectedProductCategory, setSelectedProductCategory] = useState({
    id: "all",
    name: "All Product",
  });

  const handleNavCategory = (category) => {
    console.log(category, "handleNav");
    setSelectedProductCategory(category);
    const newProductList = filterProducts(category, productListFromReducer);
    setProductData(newProductList);
  };

  useEffect(() => {
    document.title = "S B | Product";
    Axios.get("http://localhost:5005/products").then((res) => {
      setProductData(res.data);
      dispatch(accessProductDataList(res.data));
    });
  }, []);

  useEffect(() => {
    setProductCategories((prevState) => {
      let newArray = [];
      newArray.push(prevState[0]);
      newArray = newArray.concat(categoriesList);
      return newArray;
    });
  }, []);

  console.log(productData);
  return (
    <>
      <div className={classes.ProductNavigation}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <ul>
            {productCategories.map((item) =>
              item?.order !== -1 ? (
                <li
                  style={{
                    color: item.id === selectedProductCategory.id && "#d00155",
                    fontSize: "1.2rem",
                  }}
                  key={item.id}
                  tabIndex="0"
                  onClick={() => handleNavCategory(item)}
                >
                  {item.name}
                </li>
              ) : null
            )}
          </ul>
        </Suspense>
      </div>
      {/*        
       Hidden Hamburger */}
      <div className={classes.HamburgerContainer}>
        <ul className={classes.HamburgerSecondaryContainer}>
          <li
            className={classes.HamburgerImageContainer}
            tabIndex="0"
            onClick={() => setHamburgerToggle(!hamburgerToggle)}
          >
            {selectedProductCategory.name}{" "}
            {hamburgerToggle ? (
              <img src={arrowUp} alt="Up Arrow" />
            ) : (
              <img src={arrowDown} alt="Down Arrow" />
            )}
          </li>
          {hamburgerToggle &&
            productCategories.map(
              (item) =>
                item.id !== selectedProductCategory.id &&
                (item?.order !== -1 ? (
                  <li
                    style={{ marginBottom: "1rem", marginTop: "1rem" }}
                    key={item.id}
                    tabIndex="0"
                    onClick={() => {
                      handleNavCategory(item);
                      setHamburgerToggle(!hamburgerToggle);
                    }}
                  >
                    {item.name}
                  </li>
                ) : null)
            )}
        </ul>
      </div>
      {/*        
       Hidden Hamburger */}

      <div className={classes.Container}>
        <Suspense fallback={<h1>Loading...</h1>}>
          {productData.map((item) => (
            <ProductCard
              key={item?.id}
              id={item?.id}
              name={item?.name}
              imageURL={item?.imageURL}
              description={item?.description}
              price={item?.price}
              stock={item?.stock}
              category={item?.category}
            />
          ))}
        </Suspense>
      </div>
    </>
  );
}
