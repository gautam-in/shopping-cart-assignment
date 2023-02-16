import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCategory } from "../../redux/productSlice";
import "./Sidebar.css";

function Sidebar({}) {
  const categories = useSelector((state) => state.products.categories);
  const currentCategory = useSelector(
    (state) => state.products.currentCategory
  );
  const dispatch = useDispatch();
  return (
    <div className="sidebar-width font-semibold h-screen">
      {categories.map(({ name, id }) => (
        <>
          <div
            className={`p-2 border-bottom ${
              currentCategory === id
                ? "bg-white text-gray-800"
                : "bg-gray-200 text-gray-500"
            }`}
            onClick={() => dispatch(setCurrentCategory(id))}
          >
            {name}
          </div>
        </>
      ))}
    </div>
  );
}

export default Sidebar;
