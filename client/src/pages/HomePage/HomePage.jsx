import React, { useEffect } from "react";
import {
  fetchAsyncBanners,
  fetchAsyncCategories,
  getAllCategories,
} from "./../../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import "./HomePage.css";
import Carousel from "./../../components/Carousel/Carousel";
import CategoryCard from "./../../components/CategoryCard/CategoryCard";
import ShoppingCart from "./../../components/ShoppingCart/ShoppingCart";

function HomePage() {
  const cart = useSelector((state) => state.cart);
  const categories = useSelector(getAllCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncCategories());
    dispatch(fetchAsyncBanners());
  }, [dispatch]);

  return (
    <main className="main-container">
      <Carousel />
      {
        <>
          {categories.length > 0 &&
            categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
        </>
      }
      {cart.showCart && <ShoppingCart />}
    </main>
  );
}

export default HomePage;
