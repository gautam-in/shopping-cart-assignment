import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCategory } from "../../redux/productSlice";
import "./Sidebar.css";
import { GlobalReducerInterface } from "../../redux/interface";

const Sidebar: React.FC<{shiftFocus:React.MouseEventHandler}>=({shiftFocus})=> {
  const categories = useSelector((state:GlobalReducerInterface) => state.products.categories);
  const currentCategory = useSelector(
    (state:GlobalReducerInterface) => state.products.currentCategory
  );
  const dispatch = useDispatch();
  
  return (
    <div className="sidebar-width font-semibold h-screen">
      <button className="p-2 bg-gray-100 mb-2 w-full" onClick={shiftFocus}>Skip to Main Content</button>
      {categories.map(({ name, id }) => (
          <a
          key={id}
            className={`p-2 border-bottom block ${
              currentCategory === id
                ? "bg-white text-gray-800"
                : "bg-gray-200 text-gray-500"
            }`}
            onClick={() => dispatch(setCurrentCategory(id))}
          >
            {name}
          </a>
      ))}
    </div>
  );
}

export default Sidebar;
