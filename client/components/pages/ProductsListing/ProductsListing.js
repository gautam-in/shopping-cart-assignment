import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProductsState from "../../organisms/ProductsState/ProductsState";
import ProductCard from "../../molecules/ProductCard/ProductCard";

import { fetchProducts } from "client/components/redux";

import * as service from "../services";

import "./ProductsListing.scss";

const intialState = {
  data: [],
  loading: false,
  error: false,
};

function ProductsListing(props) {
  let queryParams = new URLSearchParams(useLocation().search);
  let history = useHistory();

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  //Saves the raw fetched products details
  const [productDetails, setProductDetails] = useState(intialState);
  //Filters the data from *productDetails* and displays to the UI
  const [displayProductList, setDisplayProductList] = useState([]);
  const [categoriesDetails, setCategoriesDetails] = useState(intialState);
  const [query, setQuery] = useState(queryParams.get("category") || "");

  /*   const getProductsList = () => {
    setProductDetails({ ...intialState, loading: true });
    service
      .getProducts()
      .then((data) => {
        setProductDetails({ ...intialState, data, loading: false });
      })
      .catch((err) => {
        console.log("ERROR detected fetching products", err);
        setProductDetails({ ...intialState, loading: false, error: true });
      });
  }; */

  const getCategories = () => {
    setCategoriesDetails({ ...intialState, loading: true });
    service
      .getCategories()
      .then((data) => {
        //Filtering only enabled
        let temp = data.filter((category) => category.enabled);
        //Sorting based on order
        temp.sort((a, b) => a.order - b.order);

        setCategoriesDetails({ ...intialState, data, loading: false });
        /*  let queryCategoryValue = queryParams.get("category");
        setQuery(query); */
      })
      .catch((err) => {
        console.log("ERROR detected fetching categories", err);
        setCategoriesDetails({ ...intialState, loading: false, error: true });
      });
  };

  /**
   * For fetching data using redux-thunk
   */

  useEffect(() => {
    dispatch(fetchProducts());
    /* getProductsList(); */
    getCategories();
  }, []);

  /**
   * When clicked on products navigation, all the products list should be displayed
   * useEffect will detect /products?category=5b68 -> /products and setQuery would be changed
   * the next useEffect will detect the query change and reload all products.
   */
  useEffect(() => {
    if (!props.location.search) {
      setQuery("");
    }
  }, [props.location.search]);

  useEffect(() => {
    if (query) filterProductsBasedOnCategory(query, products.data);
    else setDisplayProductList(products.data);
  }, [query, products]);

  /**
   * For fetching data locally
   */
  /* useEffect(() => {
    if (query) filterProductsBasedOnCategory(query, productDetails.data);
    else setDisplayProductList(productDetails.data);
  }, [query, productDetails.data]); */

  const filterProductsBasedOnCategory = (id, products) => {
    setDisplayProductList(() =>
      products.filter((product) => product.category === id)
    );
  };

  const setQueryValues = (id) => {
    if (!id) {
      queryParams.delete("category");
      history.replace({
        search: queryParams.toString(),
      });
    } else {
      history.push({ search: "?category=" + id });
    }

    setQuery(id);
  };

  return (
    <div className="products_container">
      <aside className="categories_list">
        <select
          name="query"
          onChange={(e) => {
            setQueryValues(e.target.value);
          }}
          value={query}
          className="category_mobile"
        >
          {/* For mobile view */}
          <option value="">All Products</option>
          {categoriesDetails?.data?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {/* For tab and desktop view */}
        <ul>
          {categoriesDetails?.data?.map((category) => (
            <li
              key={category.id}
              onClick={() => {
                /* setQuery(category.id); */
                setQueryValues(category.id);
              }}
              className={
                query === category.id
                  ? "category_item category_item--active"
                  : "category_item"
              }
            >
              {category.name}
            </li>
          ))}
        </ul>
      </aside>
      <div className="products_list">
        <ProductsState dataList={displayProductList} status={products}>
          {displayProductList.map((list) => (
            <ProductCard key={list.id} list={list} />
          ))}
        </ProductsState>
      </div>
    </div>
  );
}
/* //useSelector or mapStateToProps
const mapStateToProps = (state, ownProps) => {
  return {
    itemsCount: state.itemsCount,
  };
};
//useDispatch or mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (list) => dispatch(addItem(list)),
    incrementItem: () => dispatch(incrementItem()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsListing); */

export default ProductsListing;
