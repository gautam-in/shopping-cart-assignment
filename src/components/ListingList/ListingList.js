import React, { useEffect } from "react";
import { fetchProductData } from "../../redux/product/productAction";
import { useSelector, useDispatch } from "react-redux";
import ListingCard from "../ListingCard/ListingCard";

const url = "http://localhost:5000/products";

function ListingList() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductData(url));
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <ListingCard data={data} />
      )}
    </>
  );
}

export default React.memo(ListingList);
