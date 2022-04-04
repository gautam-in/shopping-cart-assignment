import React, { useEffect, useState } from "react";
import "./Products.css";
import { useNavigate, useParams } from "react-router-dom";
import ProductItem from "../../Components/ProductItem/ProductItem.component";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAction } from "../../Store/Category/category.action";
import { fetchProductsAction } from "../../Store/Products/products.action";

export default function Products() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const [filteteredProducts, setFilteredProducts] = useState([]);

  const {
    categories: { allCategories },
    products: { allProducts },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);

  useEffect(() => {
    filterProduct();
  }, [categoryId, allProducts]);

  const filterProduct = () => {
    if (categoryId) {
      setFilteredProducts(
        allProducts.filter((product) => product.category === categoryId)
      );
    } else {
      setFilteredProducts(allProducts);
    }
  };

  const dropdownHandler = (event) => {
    const { value } = event.target;
    if (value !== "default") navigate(`/products/${value}`);
  };

  return (
    <div className="products-main">
      <select
        name="SelectCategory"
        id="category-selection-dropdown"
        onChange={dropdownHandler}
        value={categoryId ? categoryId : "default"}
      >
        <option value="default" disabled>
          Select Category
        </option>
        {allCategories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <div className="products-container">
        <aside className="product-category-selection">
          <nav>
            <ul>
              {allCategories.map((category) => (
                <li key={category.id}>
                  <NavLink
                    to={`/products/${category.id}`}
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    {category.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <article className="products-list">
          <div className="product-list-container">
            {filteteredProducts.map((val) => (
              <ProductItem key={val.id} {...val}></ProductItem>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
