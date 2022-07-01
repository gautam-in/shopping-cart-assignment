import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { v4 } from "node-uuid";

/**
 * ### Search Class
 * search class is a very usefull when, using
 * location search api, it help's you to find
 * key and value form the location pathname
 *
 * #### Method
 * - ```getValue(key)```: help's you find the value of a key, for ex: **?key=```value```**
 * - ```getKey(key)```: help's you find the key from the location path, for ex: **?```key```=value&```key2```=value2**
 */
class Search {
  constructor(location) {
    this.location = location;
    this.search = location.search;
    this.isSearched = this.search === "" ? false : true;
    this.searchKey = this.isSearched && this.search.replace("?", "").split("&");
  }

  getKey(key) {
    return (
      this.isSearched &&
      this.searchKey.filter((keys) => keys.includes(key + "="))[0]
    );
  }
  getValue(key) {
    return this.isSearched ? this.getKey(key).replace(`${key}=`, "") : "";
  }
}

function Products({ products, categories, addToCart }) {
  // Hook Initialization
  const location = useLocation();
  const navigate = useNavigate();
  // Initiating Search
  const search = new Search(location);
  // State
  const [filterID, setFilterID] = useState("");

  useEffect(() => {
    setFilterID(search.getValue("filter"));
    localStorage.setItem("selectedCategory", search.getValue("filter"));
  }, [location]);

  function RenderProducts() {
    let data = products.data.filter((item) => item.category === filterID);
    
    function mapFilteredData() {
      return data.map((product) => <ProductCard addToCart={addToCart} data={product} key={v4()} />)
    }
    function mapProductsData() {
      return products.data.map((product) => <ProductCard addToCart={addToCart} data={product} key={v4()} />)
    }

    return data.length > 0
      ? mapFilteredData()
      : mapProductsData();
  }

  function CategoryDropdown() {
    return (
      <select
        name="category-dropdown"
        id="categoryDropdown"
        aria-label="filter category"
        className="filter-items-dropdown d-md-none d-block"
        defaultValue={localStorage.getItem("selectedCategory")}
        onChange={(e) => {
          let value = e.currentTarget.value;
          navigate(
            search.getValue("filter") === value
              ? "/products"
              : `/products?filter=${value}`
          );
        }}
      >
        <option key={"index-0"} value="">
          All Categories
        </option>
        {categories.data.map((category, index) => {
          return (
            <option key={"index-" + index} value={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
    );
  }

  return (
    <main className="products">
      <div className="container-md max-auto p-0">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 p-0">
            <aside className="filter-panel">
              <CategoryDropdown />
              <nav className="filter-items-wrapper d-md-block d-none">
                {categories.data.map((category) => {
                  return (
                    <Link
                      key={v4()}
                      to={`${
                        search.getValue("filter") === category.id
                          ? "/products"
                          : `/products?filter=${category.id}`
                      }`}
                      className={`filter-item ${
                        category.id === search.getValue("filter")
                          ? "active"
                          : ""
                      }`}
                    >
                      {category.name}
                    </Link>
                  );
                })}
              </nav>
            </aside>
          </div>
          <div className="col-12 col-md-8 col-lg-9 p-0">
            <div className="container-fluid mx-auto">
              <div className="row">
                <RenderProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
