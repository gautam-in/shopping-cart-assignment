import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import "../styles/product-page.scss";

const ProductsPage = () => {
  const { categoryId } = useParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const categoryList = await axios.get("http://localhost:8000/categories");
    setCategories(categoryList.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categoryId && categories.length) {
      const activeCategory = categories.find(
        (category) => category.id === categoryId
      );
      setActiveCategory(activeCategory.id);
    }
  }, [categories, categoryId]);

  const toggleActiveCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? "all" : categoryId);
  };

  return (
    <div className="productpage-container">
      <SideBar
        toggleActiveCategoryCallback={toggleActiveCategory}
        activeCategory={activeCategory}
      />
      <ProductList key={categories.id} activeCategory={activeCategory} />
    </div>
  );
};
export default ProductsPage;
