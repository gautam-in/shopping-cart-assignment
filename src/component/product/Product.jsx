import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./product.scss";
import { getCategory } from "../../redux/category/actionCreator";
import ProductList from "./ProductList";

function Product() {
  let hashID;
  const dispatch = useDispatch();
  const history = useHistory();

  const categoryData = useSelector((state) => state.getCatDetail.category);

  hashID = history.location.hash && history.location.hash;

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div className="app-product">{<ProductList categoryId={hashID} />}</div>
  );
}

export default Product;
