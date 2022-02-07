import React, { useEffect } from "react";
import {
  fetchAsyncBanners,
  fetchAsyncCategories,
  getAllCategories,
} from "../functions/Products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../Components/Category/Category";
import "./Home.scss";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import Carousel from "./HeroCrousel/Carousel";

export default function Home() {
  const cart = useSelector((state) => state.cart);
  const categories = useSelector(getAllCategories);
  // const load = useSelector(loaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncCategories());
    dispatch(fetchAsyncBanners());
  }, [dispatch]);

  return (
    <>
      <div className="movie-card-container">
        <Carousel />
        {
          <div>
            {categories.length > 0 &&
              categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
          </div>
        }
        {cart.showCart && <ShoppingCart />}
      </div>
    </>
  );
}
