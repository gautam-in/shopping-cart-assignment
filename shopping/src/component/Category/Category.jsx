import React, { useEffect, useState } from "react";
import CategoryData from "../../server/categories/index.get.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import {fa-carret-down } from "https://cdn.skypack.dev/@fortawesome/free-brands-svg-icons@5.15.3";
import "./category.css";

const Category = (props) => {
  const [selectedItem, setSelectedName] = useState("Please select category");
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!isOpen);
  return (
    <div className="category" aria-label="secondary">
      {window.screen.width > 767 ? (
        <ul>
          {CategoryData.map((item, index) => {
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={props.toggleElement ? "activeClass" : undefined}
                  onClick={() => {
                    props.clickprops(item.id, item);
                  }}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="dropdown">
          <div className="dropdown-header">
            <button type="button " onClick={toggleDropdown}>
              {selectedItem}
              <i
                style={{ float: "right" }}
                className={`fa icon ${
                  isOpen ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </button>
          </div>
          {isOpen ? (
            <div className={`dropdown-body ${isOpen && "open"}`}>
              <ul>
                {CategoryData.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={
                          props.toggleElement ? "activeClass" : undefined
                        }
                        onClick={() => {
                          props.clickprops(item.id, item);
                          setSelectedName(item.name);
                        }}
                      >
                        {item.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Category;
