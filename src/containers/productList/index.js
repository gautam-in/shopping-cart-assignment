import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Sidebar from "../../components/sidebar";
import Product from "../../components/product";

import { FetchData, LocalStorage, pubsub, useDevice } from "../../utils";

import "./index.scss";

import { getCategoryApi, getProductApi } from "../../services";
import topic from "../../constant/topic";

const ProductList = () => {
  const { isDesktop } = useDevice();
  const location = useLocation();
  const history = useHistory();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("");
    }
  }, [location.search]);

  useEffect(() => {
    // pubsub.subscribe(topic.ADD_TO_CART, listenCartCount);
    FetchData(getCategoryApi)
      .then((res) => {
        const categoryList = res
          .sort((a, b) => a.order - b.order)
          .filter((value) => {
            return value.order !== -1;
          });
        setCategories(categoryList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    FetchData(getProductApi)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (value) => {
    const id = value;
    if (selectedCategory === id || id == "") {
      history.push(`/products`);
    } else {
      history.push(`/products?category=${id}`);
    }
  };

  const handleCart = (product) => {
    const cartItems = LocalStorage.getItem("cartItems") || [];
    let alreadyAvailableInCart = false;
    cartItems.length &&
      cartItems.map((singleCartItem) => {
        if (singleCartItem.id === product.id) {
          singleCartItem.count = singleCartItem.count + 1;
          alreadyAvailableInCart = true;
        }
      });
    if (!alreadyAvailableInCart) {
      product.count = 1;
      cartItems.push(product);
    }
    LocalStorage.setItem("cartItems", cartItems);
    pubsub.publish(topic.ADD_TO_CART, cartItems.length);
    isDesktop && pubsub.publish(topic.OPEN_CART_OVERLAY, true);
  };
  return (
    <div className="product_list_container container-fluid wrapper">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onClick={handleClick}
      />
      <div className="products">
        {products &&
          products.length > 0 &&
          products
            .filter((singleProduct) =>
              selectedCategory.length
                ? singleProduct.category === selectedCategory
                : true
            )
            .map((product) => (
              <Product
                product={product}
                key={product.id}
                handlecart={handleCart}
              />
            ))}
      </div>
    </div>
  );
};

export default ProductList;
