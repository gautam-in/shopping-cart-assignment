import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";

import DisplayProductsCard from "../../organisms/DisplayProductsCard/DisplayProductsCard";
import { addItem, fetchProducts } from "client/components/redux";

import * as service from "./ProductsListing.service";

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

  useEffect(() => {
    dispatch(fetchProducts());
    /* getProductsList(); */
    getCategories();
  }, []);

  /**
   * For fetching data using redux-thunk
   */
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
    setQuery(id);
    history.push({ search: "?category=" + id });
  };

  return (
    <div className="home_container">
      <aside className="categories_dropdown_mobile">
        {/* {window.innerWidth < 600 ? ( */}
        <select
          name="query"
          onChange={(e) => {
            /* setQuery(e.target.value);
            history.push({ search: "?category=" + e.target.value }); */
            setQueryValues(e.target.value);
          }}
          value={query}
          className="category_mobile"
        >
          <option value="null" disabled>
            Please select
          </option>
          {categoriesDetails?.data?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        {categoriesDetails?.data?.map((category) => (
          <div
            key={category.id}
            onClick={() => {
              /* setQuery(category.id); */
              setQueryValues(category.id);
            }}
            className="category_not_mobile"
          >
            {category.name}
          </div>
        ))}
      </aside>
      <div className="products_list">
        <DisplayProductsCard dataList={displayProductList} status={products}>
          {displayProductList.map((list) => {
            let { id, name, description, imageURL, price, stock } = list;
            return (
              <div key={id} className="product_area">
                <div class="product_name"> {name}</div>
                <img src={imageURL} alt={name} width="100%" height="auto" />
                <div className="product_desc">{description}</div>
                <div
                  onClick={() => {
                    dispatch(addItem(list));
                  }}
                  className="buy_button"
                >
                  <div className="noselect">Buy again now @Rs.{price}</div>
                  {/* <div className="noselect">Buy again now </div>
                  <div className={"noselect"}>@Rs.{price}</div> */}
                </div>
                {/* <section>
                    <div>{description}</div>
                    <div
                      onClick={() => {
                        dispatch(addItem(list));
                      }}
                      className="noselect buy_button"
                    >
                      Buy again now @Rs.{price}
                    </div>
                  </section> */}
              </div>
            );
          })}
        </DisplayProductsCard>
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
