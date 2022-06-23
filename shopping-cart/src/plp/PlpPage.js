import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setCategories, setFilter } from "../redux/actions";
import { API_URL, getUrl } from "../endpoints/endpoints";
import ProductCard from "../productCard/ProductCard";
import "./plpCss.css";

const PlpPage = () => {
  const categoriesData = useSelector((state) => state.categories);
  const productsData = useSelector((state) => state.products);
  const selectedCategory = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get(getUrl(API_URL.getProducts)).then((res) => {
      dispatch(setProducts(res.data));
    });

    axios.get(getUrl(API_URL.getCategories)).then((res) => {
      dispatch(setCategories(res.data));
    });

    window.onclick = function (event) {
      if (
        !event.target.matches(".dropbtn") &&
        !event.target.matches(".listElements")
      ) {
        setOpen(false);
      }
    };
  }, [dispatch]);

  const handleCategory = (value) => {
    if (value.id === selectedCategory?.id) {
      dispatch(setFilter(null));
    } else {
      dispatch(setFilter(value));
    }
  };

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <>
      <Grid container>
        <Grid
          container
          justifyContent="center"
          item
          xs={12}
          sx={{ display: { xs: "flex", sm: "none", md: "none" } }}
        >
          {categoriesData && (
            <div className="dropdown">
              <button onClick={toggleDropdown} className="dropbtn">
                {selectedCategory ? selectedCategory.name : "select category"}
              </button>
              <div
                id="myDropdown"
                className={`dropdown-content ${open ? "show" : ""}`}
              >
                {categoriesData.map((item, index) => (
                  <button
                    key={item.id}
                    className={`listElements ${
                      selectedCategory?.id === item.id
                        ? "selectedCategoryMobile"
                        : ""
                    }`}
                    onClick={() => handleCategory(item)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: "none", sm: "flex" },
            backgroundColor: "#e9e9e9",
            height: "auto",
          }}
          sm={3}
        >
          <div className="category-list">
            <ul>
              {categoriesData &&
                categoriesData.map((item) => {
                  return (
                    <li key={item.id}>
                      <button
                        className={`${
                          selectedCategory?.id === item.id
                            ? "selectedCategory"
                            : ""
                        }`}
                        onClick={() => handleCategory(item)}
                      >
                        <label>
                          <p>{item.name}</p>
                        </label>
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
        </Grid>

        <Grid container item xs={12} sm={9}>
          {productsData &&
            productsData
              .filter(
                (item) =>
                  item.category === selectedCategory?.id || !selectedCategory
              )
              .map((item) => {
                return <ProductCard key={item.id} product={item} />;
              })}
        </Grid>
      </Grid>
    </>
  );
};

export default PlpPage;
