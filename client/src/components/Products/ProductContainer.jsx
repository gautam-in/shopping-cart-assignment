import React, { Fragment } from "react";
import { useEffect } from "react";
import "./product.scss";
import axios from "axios";
// import { Container, Grid } from "@material-ui/core";
import { useState } from "react";
import { Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
import ProductList from "./ProductList";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../MainContext";

const ProductContainer = () => {
  const location = useLocation();
  const { cartTotalItems, setCartTotalItems, cartItems, setCartItems } =
    useContext(MainContext);
  const [categories, setCategories] = useState(null);
  const [filterProductList, setFilterProductList] = useState(null);
  const [productList, setProductList] = useState(null);
  const [cart, setCart] = useState([]);

  const getCategories = async () => {
    const result = await axios.get("http://localhost:5000/categories");
    if (result) {
      setCategories(result.data);
    }
  };

  const getProducts = async () => {
    const productList = await axios.get("http://localhost:5000/products");
    if (productList.status === 200) {
      setProductList(productList.data);
    }
  };

  const filterDataHandler = (id) => {
    if (id !== "all") {
      let cloneProdcutArr = [...productList];
      const filterProductList = cloneProdcutArr.filter((product) => {
        return product.category === id;
      });
      setFilterProductList(filterProductList);
    } else {
      getProducts();
    }
  };

  const addTocart = (item) => {
    console.log(item);
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
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  useEffect(() => {
    if (productList && localStorage.getItem("categoryId")) {
      filterDataHandler(localStorage.getItem("categoryId"));
    }
  }, [productList]);

  useEffect(() => {
    if (cart.length > 0) {
      console.log(cart);
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
                  <option value={"all"} selected disabled >
                    Select Category
                  </option>
                  
                  {categories &&
                    categories
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
              {categories &&
                categories
                  .filter((item) => item.order > 0)
                  .sort((a, b) => a.order - b.order)
                  .map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="sidebar-item-name"
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
              productdata={productList}
              filterData={filterProductList}
              addTocart={addTocart}
            />
          </Col>
        </Row>
      </Container>
      {/* <Container fixed>
        <Grid>
          <Grid item xs={4}>
            <div className="sidebar">
              {categories &&
                categories
                  .filter((item) => item.order > 0)
                  .sort((a, b) => a.order - b.order)
                  .map((item) => {
                    return <div key={item.id} className='sidebar-item-name'>{item.name}</div>;
                  })}
            </div>
          </Grid>
        </Grid>
      </Container> */}
    </Fragment>
  );
};

export default ProductContainer;
