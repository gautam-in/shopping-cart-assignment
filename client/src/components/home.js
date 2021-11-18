import React, { useEffect } from "react";
import {
  fetchBanner,
  fetchCategories,
  //getAllCategories,
  // loaded,
} from "../redux";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../components/CategoryCard";
import "../styles/home.scss";
import Cart from "../components/Cart";
import Carousel from "../components/Carousel";
import Category from "../components/Category";


export default function Home() {
  const cart = useSelector((state) => state.cart);
  const categories = useSelector((state) => state.categories.categories);
  
  // const load = useSelector(loaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBanner());
  }, [dispatch]);

  return (
    <>
      <div className="movie-card-container">
        <Carousel />
          <div>
            {categories.length > 0 &&
              categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
          </div>
      </div>
    </>
  );
}