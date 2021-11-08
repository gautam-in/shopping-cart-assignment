import React, { useEffect } from "react";
import {
  fetchAsyncCategories,
  getAllCategories,
  // loaded,
} from "../../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./Home.scss";
import Cart from "../Cart/Cart";

export default function Home() {
  const cart = useSelector((state) => state.cart);
  const categories = useSelector(getAllCategories);
  // const load = useSelector(loaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  return (
    <div className="movie-card-container">
      {
        /* {load === true ? (
        <div> ..loading </div>
      ) : ( }*/
        <div>
          {categories.length > 0 &&
            categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
        </div>
      }
      {cart.showCart && <Cart />}
    </div>
  );
}
