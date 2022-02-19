import React, { Fragment } from "react";
import { useEffect } from "react";
import "./product.scss";
import axios from "axios";
// import { Container, Grid } from "@material-ui/core";
import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import ProductList from "./ProductList";
import { useLocation } from "react-router-dom";

const ProductContainer = () => {
  const location = useLocation();
  const [categories, setCategories] = useState(null);
  const [filterProductList, setFilterProductList] = useState(null);
  const [productList, setProductList] = useState(null);

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
    let cloneProdcutArr = [...productList];
    const filterProductList = cloneProdcutArr.filter((product) => {
      return product.category === id;
    });
    setFilterProductList(filterProductList);
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

  return (
    <Fragment>
      <Container>
        <Row>
          <Col md={3}>
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
