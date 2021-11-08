import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncCategories,
  fetchAsyncProducts,
} from "../../features/products/productSlice";
import Cart from "../Cart/Cart";
import ProductList from "../ProductList/ProductList";
import SideBar from "../SideBar/SideBar";
import "./Products.scss";

export default function Products() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  // console.log(cart.showCart);
  // let width = window.innerWidth;

  useEffect(() => {
    dispatch(fetchAsyncProducts());
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  return (
    <div className="products-all">
      <SideBar />
      <ProductList />
      {cart.showCart && <Cart />}
    </div>
  );
}
