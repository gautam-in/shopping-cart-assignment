import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncCategories,
  fetchAsyncProducts,
} from "../../functions/Products/productSlice";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import ProductsList from "../ProductsList/ProductsList";
import SideNavBar from "../SideNavBar/SideNavBar";
import "./Products.scss";

export default function Products() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchAsyncProducts());
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  return (
    <div className="products-all">
      <SideNavBar />
      <ProductsList />
      {cart.showCart && <ShoppingCart />}
    </div>
  );
}
