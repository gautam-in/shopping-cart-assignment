import React, { useState, useEffect } from "react";
import { GetCategory } from "../../api/data";

const SideMenu = (props) => {
  const [category, setCategory] = useState([]);
  let finalCategoryList = null;

  //fetch all the categories on page load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetCategory();
        if (result && result.length > 0) setCategory(result);
      } catch (err) {
        return "Unale to fetch Data, Please try again later";
      }
    };
    fetchData();
  }, []);

  if (category && category.length > 0) {
    //sort all the categories as per the order
    category.sort(function (a, b) {
      return a.order - b.order;
    });
    finalCategoryList = category.map((item) => {
      if (item.enabled) {
        return (
          <a
            href="#"
            onClick={() => {
              props.setCategoryId(item.id);
            }}
            key={item.id}
          >
            {item.name}
          </a>
        );
      }
    });
  }
  return <nav className="sidebar">{finalCategoryList}</nav>;
};
export default SideMenu;
