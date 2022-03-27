import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as categoryActions from "../../redux/Categories/categories.action";
import { Link, useParams } from "react-router-dom";

const Dropdown = ({ categoryId }) => {
  let dispatch = useDispatch();
  let categoryItems = useSelector((state) => {
    return state.categories;
  });
  let [currentcategory, setCategory] = useState("");
  useEffect(() => {
    if (categoryItems.categories.length === 0) {
      dispatch(categoryActions.getAllCategories());
    }
    const category = categories.filter((c) => c.id === categoryId);
    if (category.length > 0) {
      setCategory(category[0].name);
    } else {
      setCategory("Select Categories");
    }
  }, [categoryId]);
  // useEffect(() => {
  //   setCategory({
  //     ...category,
  //     item: categories.filter((c) => c.id === categoryId),
  //   });
  // }, [categoryId]);

  let { categories } = categoryItems;

  categories = categories.sort((a, b) => a.order - b.order).filter((a) => a.enabled);

  return (
    <React.Fragment>
      {/* <small>{JSON.stringify(categories.filter((c) => c.id === categoryId))}</small>
      <small>{currentcategory}</small> */}
      <div class="dropdown d-md-none">
        <div
          className="btn-primary mt-3 d-flex justify-content-between align-items-center"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <p className="my-3">
            {/* {category.item.length === 0 ? `${categoryId}` : category.item[0].name} */}
            {currentcategory}
          </p>
          <i class="fa-solid fa-chevron-down p-3"></i>
        </div>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {categories.map((category) => {
            return (
              <>
                <li>
                  <Link
                    to={`/products/${category.id}`}
                    key={category.id}
                    className="category-link dropdown-item"
                  >
                    {category.name}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Dropdown;
