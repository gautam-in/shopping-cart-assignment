import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../components/sidebar/Sidebar";
import "../pages/ProductListingPage.css";
import { Card, Button } from "react-bootstrap";
const ProductListingPage = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [disable, setDisable] = useState(false);
  const [productSpinner, setProductSpinner] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categorySpinner, setCategeoriesSpinner] = useState(true);
  const [filter, setFilter] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const cart = useSelector((state) => state.cartadddeleteitem.cart);
  //Function to fetch categories
  async function getCategories() {
    setCategeoriesSpinner(true);
    await axios
      .get("http://localhost:5000/categories")
      .then((response) => {
        if (response.status === 200) {
          setCategeoriesSpinner(false);
          setCategories(response.data);
        }
      })
      .catch((error) => {
        if (error.response !== undefined) {
          if (error.response.status === 404) {
            console.log(error.response);
          }
        }
      });
  }
  //Function to fetch product
  async function getProducts() {
    setProductSpinner(true);
    await axios
      .get("http://localhost:5000/products")
      .then((response) => {
        if (response.status == 200) {
          setProductSpinner(false);
          setProducts(response.data);
        }
      })
      .catch((error) => {
        if (error.response !== undefined) {
          if (error.response.status === 404) {
            console.log(error.response);
          }
        }
      });
  }
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getFilteredList = (id) => {
    if (id == selectedCategory) {
      setFilter(false);
    } else {
      setFilter(true);
      setSelectedCategory(id);
    }
  };

  async function addCart(product) {
    let productId = product.id;
    await axios
      .post("http://localhost:5000/addToCart", productId)
      .then((response) => {
        if (response.status == 200) {
          dispatch({ type: "ADD_ITEMS", payload: product });
        }
      });
  }

  return (
    <>
      <div className="sidebarContainer">
        <Sidebar
          products={products}
          categories={categories}
          getFilteredList={getFilteredList}
        />

        <div className="outerwrap">
          <div className="productContainer">
            {filter
              ? products
                  .filter((product) => product.category == selectedCategory)
                  .map((product, index) => {
                    return (
                      <div className="productDetail" key={product.id}>
                        <h3 className="ft-16px productName">{product.name}</h3>

                        <img
                          src={product.imageURL}
                          alt="product image"
                          className="productImage"
                        />
                        <p className="productDescription">
                          {product.description}
                        </p>

                        <div className="priceContainer">
                          <div className="productPrice">
                            MRP Rs.{product.price}
                          </div>
                          <div className="formBuyNowButton">
                            <button
                              onClick={() => addCart(product)}
                              className="productBuyNow"
                            >
                              BUY NOW
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
              : products.map((product, index) => {
                  return (
                    <div className="productDetail" key={product.id}>
                      <h3 className="ft-16px productName">{product.name}</h3>

                      <img
                        src={product.imageURL}
                        alt="product image"
                        className="productImage"
                      />
                      <p className="productDescription">
                        {product.description}
                      </p>

                      <div className="priceContainer">
                        <div className="productPrice">
                          MRP Rs.{product.price}
                        </div>
                        <div className="formBuyNowButton">
                          <button
                            onClick={() => addCart(product)}
                            className="productBuyNow"
                          >
                            BUY NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
      {/* {show && <MiniCart />} */}
    </>
  );
};

export default ProductListingPage;
