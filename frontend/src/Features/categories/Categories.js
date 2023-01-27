import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../layout/Loader";
import { fetchCategoriesData } from "./categoriesSlice";
import CategoryItem from "./CategoryItem";

function Categories() {
  const { isLoading, error, data } = useSelector(
    (state) => state.categories.categories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesData());
  }, []);

  return (
    <section className="categories">
      <div className="container-lg">
        {isLoading ? (
          <Loader />
        ) : (
          data.map((category) => {
            return <CategoryItem key={category.id} category={category} />;
          })
        )}
      </div>
    </section>
  );
}

export default Categories;
