import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductsPage.scss";
import Dropdown from "../common/dropdown/Dropdown";
import {
  getCategories,
  getProducts,
  buyNowItems,
} from "../../redux/actions/actions";
import ProductCard from "../common/productCard/ProductCard";
import FilterBar from "../common/filterbar/FilterBar";
import { useWindowSize } from "../common/utils";

const ProductsPage = (props) => {
  const size = useWindowSize();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(null);
  const [productsList, setProductsList] = useState(null);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(null);
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (Array.isArray(categories) && Array.isArray(products)) {
      if (categories.length > 0 && products.length > 0) {
        let sortedCategories = sortByKey(categories, "order");
        sortedCategories = sortedCategories.filter((item) => item.order > 0);
        handleCategoryClick(sortedCategories[0].id);
        setValue(sortedCategories[0].name);
      }
    }
  }, [categories, products]);

  const handleChange = (id, val) => {
    handleCategoryClick(id);
    setValue(val);
    setShow(false);
  };

  const handleToggle = (e) => {
    e.target.focus();
    setShow((prev) => !prev);
  };

  const sortByKey = (array, key) => {
    return array.sort((a, b) => {
      let x = a[key];
      let y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  };

  const handleCategoryClick = (id) => {
    setActiveTab(id);
    let filteredProducts = products.filter((item) => item.category === id);
    setProductsList(filteredProducts);
  };

  const buyNowHandler = (id, name, price, src) => {
    let itemsObj = {
      id,
      name,
      price,
      src,
    };
    dispatch(buyNowItems(itemsObj));
  };

  return Array.isArray(categories) && Array.isArray(productsList) ? (
    categories.length > 0 && productsList.length > 0 && (
      <>
        <section className="productContainer">
          {size.width < 750 ? (
            <Dropdown
              show={show}
              value={value}
              handleToggle={handleToggle}
              handleChange={handleChange}
              DropdownList={sortByKey(categories, "order")}
            />
          ) : (
            <div className="filterContainer">
              <FilterBar
                categories={sortByKey(categories, "order")}
                handleClick={handleCategoryClick}
                activeTab={activeTab}
              />
            </div>
          )}
          <div className="productListContainer">
            {productsList.map((item) => (
              <ProductCard
                key={item.id}
                src={item.imageURL}
                title={item.name}
                price={item.price}
                description={item.description}
                buyNowHandler={() =>
                  buyNowHandler(item.id, item.name, item.price, item.imageURL)
                }
              />
            ))}
          </div>
        </section>
      </>
    )
  ) : (
    <div>Loading...</div>
  );
};

export default ProductsPage;
