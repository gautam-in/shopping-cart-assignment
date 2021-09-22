import React, { useEffect } from "react";
import { fetchProductData } from "../../redux/product/productAction";
import { useSelector, useDispatch } from "react-redux";
import ListingCard from "../ListingCard/ListingCard";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";

const url = "http://localhost:5000/products";

function ListingList() {
  const dispatch = useDispatch();
  const { data, loading = true, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductData(url));
  }, []);

  return (
    <>
      {loading ? (
        <ProductSkeleton />
      ) : error ? (
        <h1>Error while fetching data</h1>
      ) : (
        <ListingCard data={data} />
      )}
    </>
  );
}

export default React.memo(ListingList);
