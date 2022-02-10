import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  fetchAsyncProducts,
  getAllCategories,
} from "../../redux/slices/productSlice";
import "./Sidebar.css";

function Sidebar() {
  const [optionText, setOptionText] = useState("Select Category...");
  const [showSideBar, setShowSideBar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const categories = useSelector(getAllCategories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateMedia = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  }, []);

  const fetchProductsHandler = (e) => {
    if (e.target.className === "active-class") {
      e.target.className = "";
      dispatch(fetchAsyncProducts());
      setShowSideBar(false);
      setOptionText("Select Category...");
      navigate("/products");
      return;
    }
    dispatch(fetchAsyncProducts(e.target.id));
    setShowSideBar(false);
    setOptionText(e.target.innerText);
  };

  const setShowSideBarHandler = (e) => {
    setShowSideBar(!showSideBar);
  };

  return isMobile ? (
    <div className="sidenav-container">
      <div className="icon-dropdown" onClick={setShowSideBarHandler}>
        <h3>{optionText}</h3>
        <i className="fas fa-chevron-down"></i>
      </div>
      <div className="sidebar-list">
        {showSideBar &&
          categories.length > 0 &&
          categories.map((category) => (
            <div className="sidenav" key={category.id}>
              <div className="category-name">
                <h4 id={category.id} onClick={(e) => fetchProductsHandler(e)}>
                  {category.name}
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  ) : (
    <div className="sidenav-container">
      {categories.length > 0 &&
        categories.map((category) => (
          <div className="sidenav" key={category.id}>
            <div className="category-name">
              <NavLink
                id={category.id}
                to={`/products/${category.id}`}
                className={({ isActive }) => (isActive ? "active-class" : "")}
                onClick={(e) => fetchProductsHandler(e)}
                end
              >
                {category.name}
              </NavLink>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Sidebar;
