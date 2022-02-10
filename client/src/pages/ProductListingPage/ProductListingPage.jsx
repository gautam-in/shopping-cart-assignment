import React, { useEffect } from "react";
import "./ProductListingPage.css";
import {
  fetchAsyncCategories,
  fetchAsyncProducts,
} from "../../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductList from "../../components/ProductList/ProductList";

function ProductListingPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchAsyncProducts());
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  return (
    <main className="main-product-container">
      <Sidebar />
      <ProductList />
      {cart.showCart && <ShoppingCart />}
    </main>
  );
}

export default ProductListingPage;
