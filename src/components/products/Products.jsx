/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { orderBy } from "lodash";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Container,
} from "@mui/material";
import { getCategoriesAPI, getProductsApi } from "utils/services";
import Spinner from "components/spinner/Spinner";
import ProductItem from "./ProductItem";
import ProductFilter from "./Filter";
import { getFilteredData } from "utils/support";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const keyFromHome = location?.state?.data;
  const categories = useQuery("get-categories", getCategoriesAPI);

  const productsList = useQuery("get-products", getProductsApi);

  const [categoryFilter, setCategoryFilter] = useState(keyFromHome ?? "");

  const [activeFilter, setActiveFilter] = useState(keyFromHome ?? "");

  const handleFilterDesktop = (id) => {
    if (activeFilter === id) {
      setActiveFilter("");
    } else {
      setActiveFilter(id);
    }
  };

  const [productsState, setProductsState] = useState(
    productsList?.data?.data ?? []
  );

  const handleChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  useEffect(() => {
    if (productsList?.data?.data?.length) {
      setProductsState(productsList?.data?.data);
    }
  }, [productsList.isSuccess]);

  //   effect for small devices filter
  useEffect(() => {
    const filteredData = getFilteredData(
      categoryFilter,
      productsList?.data?.data
    );
    setProductsState(filteredData);
  }, [categoryFilter, productsList.isFetched]);

  // filter for desktop filter
  useEffect(() => {
    const filteredData = getFilteredData(
      activeFilter,
      productsList?.data?.data
    );
    setProductsState(filteredData);
  }, [activeFilter, productsList.isFetched]);

  if (productsList?.isLoading || categories?.isLoading) return <Spinner />;

  return (
    <Container maxWidth="xl">
      <Box sx={{ marginBottom: "5rem" }}>
        <FormControl
          sx={{
            width: "100%",
            display: { xs: "block", md: "none" },
            // position: "-webkit-sticky",
            position: "sticky",
            top: "0",
            background: "#fff",
          }}
        >
          <InputLabel id="select-category-label">Select Category</InputLabel>
          <Select
            labelId="select-category-label"
            id="select-category"
            value={categoryFilter}
            label="Select Category"
            onChange={handleChange}
            fullWidth
            size="medium"
          >
            <MenuItem value="">
              <em>Reset filter</em>
            </MenuItem>
            {orderBy(categories?.data?.data, ["order"], ["asc"])
              .filter((item) => item?.enabled)
              .map((category) => (
                <MenuItem key={category?.id} value={category?.id}>
                  {category?.name}
                </MenuItem>
              ))}
          </Select>
          <FormHelperText>
            To filter the products, please choose a category.
          </FormHelperText>
        </FormControl>

        <Box
          sx={{
            display: { xs: "block", md: "grid" },
            gridTemplateColumns: "250px 1fr", //minmax(100px, 1fr)
            gap: "1rem",
          }}
        >
          <ProductFilter
            categories={categories?.data?.data}
            activeFilter={activeFilter}
            handleFilterDesktop={handleFilterDesktop}
          />
          <ProductItem productsState={productsState} />
        </Box>
      </Box>
    </Container>
  );
};

export default Products;
