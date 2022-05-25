import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/sidebar.scss";
import Categories from "./Categories";

const SideBar = () => {
  const [categories, setCagegories] = useState([]);

  const fetchCategories = async () => {
    const categoriesList = await axios.get("http://localhost:8000/categories");
    setCagegories(categoriesList.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="sidebar-card">
      {categories
        .filter((category) => category.enabled === true)
        .map((category) => (
          <Categories key={category.id} category={category} />
        ))}
    </div>
  );
};

export default SideBar;
