import React, { useState, useEffect, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Sidebar from "../../components/sidebar";
import Product from "../../components/product";

import { FetchData, useDevice } from "../../utils";
import { Context } from "../../store";

import "./index.scss";

import { getCategoryApi, getProductApi } from "../../services";
import {
  ADD_TO_CART,
  OPEN_CART_OVERLAY,
  CLOSE_CART_OVERLAY,
  CART_ITEMS,
} from "../../constant/topic";

const ProductList = () => {
  const [state, dispatch] = useContext(Context);

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
    const cartItems = state.cartItems;
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
    dispatch({
      type: CART_ITEMS,
      payload: { cartItems: cartItems },
    });
    dispatch({
      type: ADD_TO_CART,
      payload: { itemCount: cartItems.length },
    });
    isDesktop &&
      dispatch({ type: OPEN_CART_OVERLAY, payload: { showPopup: true } });
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
