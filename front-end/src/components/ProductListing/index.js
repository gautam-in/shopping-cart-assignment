import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import { HOME_ACTION_TYPES } from "../../shared/redux/actionTypes/home";
import { PRODUCTS_ACTION_TYPES } from "../../shared/redux/actionTypes/productListing";
import { requestDispatch } from "../../shared/Utils/utility";
import ProductItem from './ProductItem';
import "./index.css";

const ProductListing = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get("category");
  const products = useSelector((state) => state.productsData.products);
  const categories = useSelector((state) => state.home.categories);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    dispatch({
      type: requestDispatch(HOME_ACTION_TYPES.FETCH_CATEGORIES),
    });
    dispatch({
      type: requestDispatch(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS),
    });
  }, []);

  useEffect(() => {
    filterProducts(categoryId);
  }, [products, categoryId]);

  const filterProducts = (id) => {
    let filteredProducts = products;
    if (id) {
      filteredProducts = products.filter((item) => item.category === id);
    }
    setSelectedCategory(id);
    setProductsList(filteredProducts);
    navigate(`?category=${id === "null" ? "" : id}`);
  };

  const setResetCategory = (id) => {
    if (selectedCategory === id) {
      navigate(`?category=`);
      setSelectedCategory(null);
      return;
    }
    filterProducts(id);
  };

  const changeCategory = (event) => {
    const { value } = event.target;
    setResetCategory(value);
  };

  return (
    <>

      <div className="products-main">
        <select
          name="SelectCategory"
          id="category-selection-dropdown"
          onChange={changeCategory}
          value={categoryId ? categoryId : "default"}
        >
          <option value="default" disabled>
            Select Category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <div className="products-container">
          <aside className="product-category-selection">
            <nav>
              <ul>
                {categories.map((item) => (
                  <li key={item.id}>
                    <a
                      className={selectedCategory === item.id ? "active" : ""}
                      key={item.id}
                      onClick={() => setResetCategory(item.id)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <article className="products-list">
            <div className="product-list-container">
              {productsList.map((val) => (
                <ProductItem key={val.id} {...val}></ProductItem>
              ))}
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default ProductListing;
