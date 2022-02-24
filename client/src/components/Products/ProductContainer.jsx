import React, { Fragment } from "react";
import { useEffect } from "react";
import "./product.scss";
import axios from "axios";
// import { Container, Grid } from "@material-ui/core";
import { useState } from "react";
import { Col, Container, FormGroup, Input, Row } from "reactstrap";
import ProductList from "./ProductList";
import { useContext } from "react";
import { MainContext } from "../../MainContext";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../actions/productActions";
import { getCategoryList } from "../../actions/categoryActions";
import { API_URL } from "../../API_URL/apiUrl";

const ProductContainer = () => {
  const dispatch = useDispatch();
  const productListData = useSelector((state) => state.products.productList);
  const categoryList = useSelector((state) => state.catagories.categories);
  const { setCartTotalItems, setCartItems } = useContext(MainContext);
  const [filterProductList, setFilterProductList] = useState(null);
  const [cart, setCart] = useState([]);

  const filterDataHandler = (id) => {
    sessionStorage.setItem("filterID", id);
    if (id !== "all") {
      let cloneProdcutArr = [...productListData];
      const filterProductList = cloneProdcutArr.filter((product) => {
        return product.category === id;
      });
      setFilterProductList(filterProductList);
    } else {
      dispatch(getProductList());
    }
  };

  const addTocart = async (item) => {
    const result = await axios.post(`${API_URL}/addToCart`, item, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    });
    if (result) {
      let cartItem = [...cart];
      let product = cartItem.find((product) => product.id === item.id);
      if (product) {
        product.quantity += 1;
        setCart(cartItem);
      } else {
        item.quantity = 1;
        cartItem.push(item);
        setCart(cartItem);
      }
    }
  };

  useEffect(() => {
    dispatch(getProductList());
    dispatch(getCategoryList());
  }, []);

  useEffect(() => {
    if (productListData && localStorage.getItem("categoryId")) {
      filterDataHandler(localStorage.getItem("categoryId"));
    }
  }, [productListData]);

  useEffect(() => {
    if (cart.length > 0) {
      setCartTotalItems(cart.length);
      setCartItems(cart);
    }
  }, [cart]);

  return (
    <Fragment>
      <Container>
        <Row>
          <Col md={3}>
            <div className="sidebar-select mt-4">
              <FormGroup>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  onClick={(event) => filterDataHandler(event.target.value)}
                >
                  <option value={"all"} selected disabled>
                    Select Category
                  </option>

                  {categoryList &&
                    categoryList
                      .filter((item) => item.order > 0)
                      .sort((a, b) => a.order - b.order)
                      .map((item) => {
                        return (
                          <option value={item.id} key={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                </Input>
              </FormGroup>
            </div>
            <div className="sidebar">
              {categoryList &&
                categoryList
                  .filter((item) => item.order > 0)
                  .sort((a, b) => a.order - b.order)
                  .map((item) => {
                    return (
                      <div
                        key={item.id}
                        className={`sidebar-item-name ${
                          sessionStorage.getItem("filterID") === item.id
                            ? "sidebar-bold"
                            : ""
                        }`}
                        onClick={() => filterDataHandler(item.id)}
                      >
                        {item.name}
                      </div>
                    );
                  })}
            </div>
          </Col>

          <Col md={9}>
            <ProductList
              productdata={productListData}
              filterData={filterProductList}
              addTocart={addTocart}
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProductContainer;
