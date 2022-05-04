import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../../redux/Products/products.action";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import Dropdown from "./Dropdown";

const Products = () => {
  let { categoryId } = useParams();
  let dispatch = useDispatch();
  let productItems = useSelector((state) => {
    return state.products;
  });
  useEffect(() => {
    dispatch(productActions.getProducts(categoryId));
  }, [categoryId]);
  let { products } = productItems;
  return (
    <React.Fragment>
      <section className="container-lg">
        <div className="row">
          <div className="col-sm-3 sidebar d-flex flex-column ">
            <Sidebar />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9">
            <Dropdown categoryId={categoryId} />
            <ProductList categoryId={categoryId} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Products;
