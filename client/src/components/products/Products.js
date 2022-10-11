import React, { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import { Button } from "react-bootstrap";
import {  useDispatch } from "react-redux";
import { loadProduct } from "../redux/action";
import CopyRights from "../copyRights/CopyRights";
import useHttp from "../customHook/useHttp";
const Products = () => {
  document.title = "Products";
  // const { products } = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  const [productsData, setProductData] = useState();
  const [categoriesData, setCategoriesData] = useState();
  const [rawProductData, setRawProductData] = useState();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { sendHttpRequest } = useHttp();
  // const productRequest = () => {
   
  // };
  // const categoryRequest = () => {
  
  // };
  useEffect(() => {
    sendHttpRequest({
      url: "http://localhost:5000/products",
    }).then((response) => {
      setProductData(() => response.data);
      setRawProductData(() => response.data);
    });
    sendHttpRequest({
      url: "http://localhost:5000/categories",
    }).then((response) =>
      setCategoriesData(() =>
        response.data
          .sort((a, b) => a.order - b.order)
          .filter((item) => item.name !== "Seafood")
      )
    );
  }, [sendHttpRequest]);
  const categoryFilter = (e, idx) => {
    setProductData(() =>
      rawProductData.filter((item) => {
        return item.category === e;
      })
    );
    setSelectedIndex(() => idx);
  };
  const addProduct = (e, item) => {
    e.preventDefault();
    dispatch(loadProduct(item));
  };

  return (
    <>
      <div className={styles.wrapperProduct}>
        <div className={styles.categorySection}>
          {categoriesData &&
            categoriesData.map((item, index) => {
              return (
                <h5
                role="button"
                tabIndex="0"
                aria-label={item.name}
                  className={
                    index === selectedIndex
                      ? styles.activeItem
                      : styles.inActive
                  }
                  key={index}
                  onClick={() => categoryFilter(item.id, index)}
                  onKeyPress={() => categoryFilter(item.id, index)}
                >
                  {item.name}
                </h5>
              );
            })}
        </div>
        <div className={styles.itemCard}>
          {productsData &&
            productsData.map((item, index) => {
              return (
                <div key={index}   
                tabIndex="0"
                aria-label={item.name}>
                  <div className="card">
                    <span className={styles.shortDesc}>{item.name}</span>
                    <div className={styles.cardDescTab}>
                      <img
                        className={styles.cardImage}
                        src={item.imageURL}
                        alt="Avatar"
                      />
                      <div className={styles.cardPriceDescMob}>
                        <h6 className={styles.cardDescriptionTab}>
                          {item.description}
                        </h6>

                        <Button
                          onClick={(e) => addProduct(e, item)}
                          onKeyPress={(e) => addProduct(e, item)}
                          className="buyButtonMob"
                        >
                          Buy Now @ Rs. {item.price}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <p className={styles.cardDescription}>
                        {item.description}
                      </p>
                      <div className={styles.cardBottom}>
                        <p className={styles.cardPrice}>MRP Rs.{item.price}</p>
                        <Button
                          className="buyButton"
                          onClick={(e) => addProduct(e, item)}
                          onKeyPress={(e) => addProduct(e, item)}
                        >
                          Buy Now
                        </Button>
                      </div>
                      <div className={styles.cardBottomTab}>
                        <Button
                          onClick={(e) => addProduct(e, item)}
                          onKeyPress={(e) => addProduct(e, item)}
                          className="buyButtonTab"
                        >
                          Buy Now @ Rs. {item.price}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <CopyRights />
    </>
  );
};

export default Products;
